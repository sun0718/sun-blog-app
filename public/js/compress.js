import { resolve } from "path";
import { reject, async } from "q";

/** 图片压缩，默认同比例压缩.
 *  @param {Object} fileObj
 *  图片对象
 *  回调函数有一个参数，base64的字符串数据
 */

function checkImageType(type) {
    return ['image/png', 'image/jpeg', 'image/gif'].some(i => i === type);
}

const methods = {}

/**
   * 通过一个图片的url加载所需要的image对象
   *
   * @param {string} url - 图片URL
   * @returns {Promise(Image)}
   */
methods.urltoImage = function (url){
    return new Promise((resolve,reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('urltoImage(): Image failed to load, please check the image URL'))
        img.src = url
    })
}

/**
   * 通过一个图片的url加载所需要的File（Blob）对象
   *
   * @param {string} url - 图片URL
   * @returns {Promise(Blob)}
   *
   */
methods.urltoBlob = function (url) {
    return fetch(url).then(response => response.blob());
};

// 将一个image对象转变为一个canvas对象
/**
 * config {Object}
 * width  {Number} canvas图像高度，默认iamge高度
 * height {Number} canvas图像宽度，默认iamge宽度
 * scale {Number} 相对于image的缩放比例，范围0-10，默认不缩放，设置后覆盖width &height
 * orientation {Number} 图片旋转参数
 *          1		0°
 * 			2		水平翻转
 * 			3		180°
 * 			4		垂直翻转
 * 			5		顺时针90°+水平翻转
 * 			6		顺时针90°
 * 			7		顺时针90°+垂直翻转
 * 			8		逆时针90°
 */
methods.imagetoCanvas = async function (image, config = {}) {
    const cvs = document.createElement('canvas');
    const ctx = cvs.getContext('2d');
    let height;
    let width;
    // 设置宽高
    for (const i in config) {
      if (Object.prototype.hasOwnProperty.call(config, i)) {
        config[i] = Number(config[i]);
      }
    }
    if (!config.scale) {
      width = config.width || config.height * image.width / image.height || image.width;
      height = config.height || config.width * image.height / image.width || image.height;
    } else {
      // 缩放比例0-10，不在此范围则保持原来图像大小
      const scale = config.scale > 0 && config.scale < 10 ? config.scale : 1;
      width = image.width * scale;
      height = image.height * scale;
    }
    // 当顺时针或者逆时针旋转90时，需要交换canvas的宽高
    if ([5, 6, 7, 8].some(i => i === config.orientation)) {
      cvs.height = width;
      cvs.width = height;
    } else {
      cvs.height = height;
      cvs.width = width;
    }
    // 设置方向
    switch (config.orientation) {
      case 3:
        ctx.rotate(180 * Math.PI / 180);
        ctx.drawImage(image, -cvs.width, -cvs.height, cvs.width, cvs.height);
        break;
      case 6:
        ctx.rotate(90 * Math.PI / 180);
        ctx.drawImage(image, 0, -cvs.width, cvs.height, cvs.width);
        break;
      case 8:
        ctx.rotate(270 * Math.PI / 180);
        ctx.drawImage(image, -cvs.height, 0, cvs.height, cvs.width);
        break;

      case 2:
        ctx.translate(cvs.width, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(image, 0, 0, cvs.width, cvs.height);
        break;
      case 4:
        ctx.translate(cvs.width, 0);
        ctx.scale(-1, 1);
        ctx.rotate(180 * Math.PI / 180);
        ctx.drawImage(image, -cvs.width, -cvs.height, cvs.width, cvs.height);
        break;
      case 5:
        ctx.translate(cvs.width, 0);
        ctx.scale(-1, 1);
        ctx.rotate(90 * Math.PI / 180);
        ctx.drawImage(image, 0, -cvs.width, cvs.height, cvs.width);
        break;
      case 7:
        ctx.translate(cvs.width, 0);
        ctx.scale(-1, 1);
        ctx.rotate(270 * Math.PI / 180);
        ctx.drawImage(image, -cvs.height, 0, cvs.height, cvs.width);
        break;
      default:
        ctx.drawImage(image, 0, 0, cvs.width, cvs.height);
    }
    return cvs;
};

// 将一个canvas对象转变为一个File（Blob）对象
methods.canvastoFile  = (canvas,quality,type='image/jpeg') => {
    return new Promise(resolve => canvas.toBlob(blob => resolve(blob), type, quality));
};

// 将一个Canvas对象转变为一个dataURL字符串
methods.canvastoDataURL = async (canvas,quality,type) => {
    if (!checkImageType(type)) {
        type = 'image/jpeg';
    }
    return canvas.toDataURL(type,quality);
};

// 将File（Blob）对象转变为一个dataURL字符串
methods.filetoDataURL = (file) => {
    return new Promise((resolve)=>{
        const reader = new FileReader()
        reader.onloadend = e => resolve(e.target.result);
        reader.readAsDataURL(file);
    })
};

// 将dataURL字符串转变为image对象
methods.dataURLtoImage = function (dataURL) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('dataURLtoImage(): dataURL is illegal'));
      img.src = dataURL;
    });
};

// 将dataURL字符串转变为File（Blob）对象
methods.dataURLtoFile  = (dataURL,type) => {
    const arr = dataURL.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    if (checkImageType(type)) {
      mime = type;
    }
    return new Blob([u8arr], {
      type: mime,
    });
};
/**
 * 将file文件转变为Blob对象和URL
 */

 methods.filetoBlob = (file) => {
    return new Promise((resolve,reject)=>{
      var render = new FileReader();
      reader.onload= function (e) {
        var bf = this.result;
        var blob = new Blob([this.result],{type: 'text/plain'})
        var str = URL.createObjectURL(blob)
        resolve(str);
      }
      reader.readAsArrayBuffer(file);
    })
 }

/**
 * 图片下载到本地
 * file File(Blob)对象
 * fileName 下载后的文件名，不传以时间戳命名
 */
methods.downloadFile = (file, fileName) => {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(file);
    link.download = fileName || Date.now().toString(36);
    document.body.appendChild(link);
    const evt = document.createEvent('MouseEvents');
    evt.initEvent('click', false, false);
    link.dispatchEvent(evt);
    document.body.removeChild(link);
};

/**
 * file对象转为image对象
 */
methods.filetoImage = async (file) =>{
    const dataURL = await this.filetoDataURL(file);
    return await this.dataURLtoImage(dataURL)
}

/**
 * Blob对象转为file对象
 */
methods.blobtoFile = async (blob,name) =>{
    return new window.File([blob], name, {type: blob.type})
}

/** *进一步封装 */

/**
 * 压缩File（Blob）对象
 *@param {Blob} file - 一个File（Blob）对象
 *@param {(number|object)} config  
 *@example
 *  imageConversion.compress(file,0.8)
 *  imageConversion.compress(file,{
 *          quality: 0.8, //图片压缩质量
 *          type："image/png", //转换后的图片类型，选项有 "image/png", "image/jpeg", "image/gif"
 *          width: 300, //生成图片的宽度
 *          height：200， //生产图片的高度
 *          scale: 0.5， //相对于原始图片的缩放比率,设置config.scale后会覆盖config.width和config.height的设置；
 *          orientation:2, //图片旋转方向
 * 
 * @returns {Promise(Blob)}
 */

 methods.compress = async (file,config = {}) => {
    if (!(file instanceof Blob)) {
        throw new Error('compress(): First arg must be a Blob object or a File object.');
    }
    if (typeof config !== 'object') {
        config = Object.assign({
          quality: config,
        });
    }
    config.quality = Number(config.quality);
    if (Number.isNaN(config.quality)) {
        return file;
    }
    const dataURL = await methods.filetoDataURL(file);
    let originalMime = dataURL.split(',')[0].match(/:(.*?);/)[1]; // 原始图像图片类型
    let mime = 'image/jpeg'; // 默认压缩类型
    if (checkImageType(config.type)) {
      mime = config.type;
      originalMime = config.type;
    }
    const image = await methods.dataURLtoImage(dataURL);
    const canvas = await methods.imagetoCanvas(image, Object.assign({}, config));
    const compressDataURL = await methods.canvastoDataURL(canvas, config.quality, mime);
    const compressFile = await methods.dataURLtoFile(compressDataURL, originalMime);
    return compressFile;
 }
/**
 * 根据体积压缩File（Blob）对象
 *
 * @param {Blob} file - 一个File（Blob）对象
 * @param {(number|object)} config - 如果传入是number类型，则指定压缩图片的体积,单位Kb;也可以传入object类型，以便更详细的配置
 * 		@param {number} size - 指定压缩图片的体积,单位Kb
 * 		@param {number} accuracy - 相对于指定压缩体积的精确度，范围0.8-0.99，默认0.95；
 *        如果设置 图片体积1000Kb,精确度0.9，则压缩结果为900Kb-1100Kb的图片都算合格；
 * @example
 *  	imageConversion.compress(file,100) //压缩后图片大小为100kb
 * 		imageConversion.compress(file,{
 * 			size: 100, //图片压缩体积，单位Kb
 * 			accuracy: 0.9, //图片压缩体积的精确度，默认0.95
 * 			type："image/png", //转换后的图片类型，选项有 "image/png", "image/jpeg", "image/gif"
 * 			width: 300, //生成图片的宽度
 * 			height: 200, //生产图片的高度
 * 			scale: 0.5, //相对于原始图片的缩放比率,设置config.scale后会覆盖config.width和config.height的设置；
 * 			orientation:2, //图片旋转方向
 * 		})
 *
 * @returns {Promise(Blob)}
 */

methods.compressAccurately = async function (file, config = {}) {
    if (!(file instanceof Blob)) {
      throw new Error('compressAccurately(): First arg must be a Blob object or a File object.');
    }
    if (typeof config !== 'object') {
      config = Object.assign({
        size: config,
      });
    }
    // 如果指定体积不是数字或者数字字符串，则不做处理
    config.size = Number(config.size);
    if (Number.isNaN(config.size)) {
      return file;
    }
    // 如果指定体积大于原文件体积，则不做处理；
    if (config.size * 1024 > file.size) {
      return file;
    }
    config.accuracy = Number(config.accuracy);
    if (!config.accuracy
      || config.accuracy < 0.8
      || config.accuracy > 0.99) {
      config.accuracy = 0.95; // 默认精度0.95
    }
    const resultSize = {
      max: config.size * (2 - config.accuracy) * 1024,
      accurate: config.size * 1024,
      min: config.size * config.accuracy * 1024,
    };
    const dataURL = await methods.filetoDataURL(file);
    let originalMime = dataURL.split(',')[0].match(/:(.*?);/)[1]; // 原始图像图片类型
    let mime = 'image/jpeg';
    if (checkImageType(config.type)) {
      mime = config.type;
      originalMime = config.type;
    }
    // const originalSize = file.size;
    // console.log('原始图像尺寸：', originalSize); //原始图像尺寸
    // console.log('目标尺寸：', config.size * 1024);
    // console.log('目标尺寸max：', resultSize.max);
    // console.log('目标尺寸min：', resultSize.min);
    const image = await methods.dataURLtoImage(dataURL);
    const canvas = await methods.imagetoCanvas(image, Object.assign({}, config));
    /**
     * 经过测试发现，blob.size与dataURL.length的比值约等于0.75
     * 这个比值可以同过dataURLtoFile这个方法来测试验证
     * 这里为了提高性能，直接通过这个比值来计算出blob.size
     */
    const proportion = 0.75;
    let imageQuality = 0.5;
    let compressDataURL;
    const tempDataURLs = [null, null];
    /**
     * HTMLCanvasElement.toBlob()以及HTMLCanvasElement.toDataURL()压缩参数
     * 的最小细粒度为0.01，而2的7次方为128，即只要循环7次，则会覆盖所有可能性
     */
    for (let x = 1; x <= 7; x++) {
      // console.group();
      // console.log("循环次数：", x);
      // console.log("当前图片质量", imageQuality);
      compressDataURL = await methods.canvastoDataURL(canvas, imageQuality, mime);
      const CalculationSize = compressDataURL.length * proportion;
      // console.log("当前图片尺寸", CalculationSize);
      // console.log("当前压缩率", CalculationSize / originalSize);
      // console.log("与目标体积偏差", CalculationSize / (config.size * 1024) - 1);
      // console.groupEnd();
      // 如果到循环第七次还没有达到精确度的值，那说明该图片不能达到到此精确度要求
      // 这时候最后一次循环出来的dataURL可能不是最精确的，需要取其周边两个dataURL三者比较来选出最精确的；
      if (x === 7) {
        if (resultSize.max < CalculationSize || resultSize.min > CalculationSize) {
          compressDataURL = [compressDataURL, ...tempDataURLs]
            .filter(i => i) // 去除null
            .sort((a, b) => Math.abs(a.length * proportion - resultSize.accurate)
              - Math.abs(b.length * proportion - resultSize.accurate))[0];
        }
        break;
      }
      if (resultSize.max < CalculationSize) {
        tempDataURLs[1] = compressDataURL;
        imageQuality -= 0.5 ** (x + 1);
      } else if (resultSize.min > CalculationSize) {
        tempDataURLs[0] = compressDataURL;
        imageQuality += 0.5 ** (x + 1);
      } else {
        break;
      }
    }
    const compressFile = await methods.dataURLtoFile(compressDataURL, originalMime);
    // console.log("最终图片大小：", compressFile.size);
    // 如果压缩后体积大于原文件体积，则返回源文件；
    if (compressFile.size > file.size) {
      return file;
    }
    return compressFile;
};
    
export default methods;
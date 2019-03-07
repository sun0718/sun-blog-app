<template>
    <div class="Categroy">
        <div class="Categroy-content">
            <div class="Categroy-title">
                <h2>CATEGORY</h2>
            </div>
            <div class="Categroy-main">
                <ul class="Categroy-listings">
                    <li><a href="#">Lifestyle</a></li>
                    <li><a href="#">Health</a></li>
                    <li><a href="#">Article</a></li>
                    <li><a href="#">Travel</a></li>
                    <li><a href="#">Uncategorised</a></li>
                </ul>
            </div>
        </div>
        <!-- // widget-content -->
    </div>
</template>


<style lang="less">
.Categroy{
    border: 1px solid #e0e0e0;
    margin-bottom: 40px;
    .Categroy-content{
        .Categroy-title{
            padding: 30px 20px 20px 20px;
            h2{
                overflow: hidden;
                position: relative;
                text-transform: uppercase;
                font-size: 24px;
                letter-spacing: 2px;
                font-family: "Spectral SC",serif;
                text-align: left;
                &::after{
                    content: "";
                    display: inline-block;
                    height: 0.7em;
                    vertical-align: bottom;
                    width: 100%;
                    margin-right: -100%;
                    margin-left: 10px;
                    border-top: 3px solid #111;
                }
            }
        }
        .Categroy-main{
            padding: 20px 20px 30px 20px;
            .Categroy-listings{
                li{
                    text-align: left;
                    a{
                        position: relative;
                        color: #111;
                        display: block;
                        padding: 10px 20px;
                        border-bottom: 1px solid #e0e0e0;
                        &::before{
                            content: '\f105 ';
                            font-family: 'fontAwesome';
                            position: absolute;
                            left: 0;
                            top: 11px;
                            font-size: 16px;
                        }
                        &:hover{
                            color: #0078D7;
                            padding-left: 30px;
                        }
                    }
                }
            }
        }
    }
}
</style>

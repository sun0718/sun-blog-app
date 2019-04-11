<template>
  <div id="comments" class="comments py-5">
    <h3 class="h5 mb-2x">
      评论
      <small class="text-sm">(1)</small>
    </h3>
    <div id="respond" class="comment-respond">
      <form
        method="post"
        action="https://demo.nicetheme.xyz/ashley-style-2/wp-comments-post.php"
        id="commentform"
        class="comment-form"
      >
        <div class="d-flex-row w-100">
          <div class="mr-1x avatar-div comment-avatar-author">
            <img
              alt
              src="//cdn.v2ex.com/gravatar/?s=50&amp;d=mm&amp;r=g"
              srcset="//cdn.v2ex.com/gravatar/?s=100&amp;d=mm&amp;r=g 2x"
              class="avatar"
              height="50"
              width="50"
            >
          </div>
          <div class="flex comment-from-author">
            <div class="mb-1x comment-textarea">
              <el-input
                type="textarea"
                id="comment"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="content"
              ></el-input>
            </div>
            <el-row class="d-flex-row mb-1x">
              <el-col :span="8">
                <el-input type="text" placeholder="昵称" v-model="name"></el-input>
              </el-col>
              <el-col :span="8" class="ml-1x">
                <el-input type="email" placeholder="邮箱" v-model="email"></el-input>
              </el-col>
              <el-col :span="8" class="ml-1x">
                <el-input type="url" placeholder="网址" v-model="url"></el-input>
              </el-col>
            </el-row>
            <div class="text-right common-submmit">
              <a href>
                <el-button class="text-white">发表评论</el-button>
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
    <ul class="comment-list">
      <li id="comment-12" class="mt-2x">
        <article id="div-comment-12" class="d-flex-row w-100">
          <div class="avatar-div mr-1x">
            <img
              alt
              src="//cdn.v2ex.com/gravatar/280e47295928e97fc02d6310d3bed79a?s=50&amp;d=mm&amp;r=g"
              srcset="//cdn.v2ex.com/gravatar/280e47295928e97fc02d6310d3bed79a?s=100&amp;d=mm&amp;r=g 2x"
              class="avatar"
              height="50"
              width="50"
            >
          </div>
          <!-- .comment-author -->
          <div class="flex d-flex-column comment-text">
            <div class="comment-info mb-2">
              <div class="comment-author text-sm">
                <a href="http://www.11.com" rel="external nofollow" class="url">简书</a>
              </div>
            </div>
            <div class="comment-content d-inline-block text-sm">
              <p>简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。</p>
            </div>
            <!-- .comment-content -->
            <div class="text-xs text-muted pt-2">
              <time class="comment-date mr-1x">2019-03-03</time>
              <el-button
                type="text"
                icon="fa fa-repeat"
                onclick="return addComment.moveForm( 'comment-12','12', 'respond','37' ) "
              >回复</el-button>
            </div>
          </div>
          <!-- .comment-text -->
        </article>
        <!-- .comment-body -->
      </li>
    </ul>
    <!-- .comment-list -->
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      content: "",
      name: "",
      email: "",
      url: ""
    };
  }
};
</script>


<style lang="less">
#comments {
  margin-top: 4rem;
  .d-flex-row {
    flex-wrap: inherit;
    .common-submmit {
      a {
        button {
          background-color: #00818a;
          border-color: #00818a;
          box-shadow: 0px 5px 20px -3px rgba(0, 129, 138, 1.55) !important;
        }
        &:hover button {
          color: #fff;
          background-color: #283149;
          border-color: #283149;
          box-shadow: 0px 5px 20px -3px rgba(37, 44, 65, 0.33) !important;
        }
      }
    }
    .comment-content {
      background-color: #eef1f7;
      border-radius: 0.25rem;
      padding: 0.5rem;
      overflow: hidden;
    }
  }
}
</style>


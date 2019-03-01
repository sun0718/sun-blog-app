<template>
    <div class="AriticlSocial">
        <ul class="bigArticle-share">
            <li class="list-share list-share-facebook">
                <a href="#" class="list-share-link">
                    <i class="fa fa-facebook list-share-logo"></i>
                </a>
            </li>
            <li class="list-share list-share-twitter">
                <a href="#" class="list-share-link">
                    <i class="fa fa-twitter list-share-logo"></i>
                </a>
            </li>
            <li class="list-share list-share-email">
                <a target="_self" href="mailto:?subject=Optimistic%20Blog&amp;body=https%3A%2F%2Foffshorethemes.com%2Fhtml%2Foptimistic-blog%2Fdemo%2Findex.php%23" class="list-share-link">
                    <i class="fa fa-at list-share-logo"></i>
                </a>
            </li>
            <li class="list-share list-share-pinterest">
                <a href="#" class="list-share-link">
                    <i class="fa fa-pinterest list-share-logo"></i>
                </a>
            </li>
            <li class="list-share list-share-pocket">
                <a href="#" class="list-share-link">
                    <i class="fa fa-get-pocket list-share-logo"></i>
                </a>
            </li>
            <li class="list-share list-share-googleplus">
                <a href="#" class="list-share-link">
                    <i class="fa fa-google list-share-logo"></i>
                </a>
            </li>
            <li class="list-share list-share-linkedin">
                <a href="#" class="list-share-link">
                    <i class="fa fa-linkedin list-share-logo"></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'AriticlSocial'
}
</script>


<style lang="less">
.bigArticle-share{
    .list-share{
        display: inline-block;
        margin: 0 8px;
        border: none;
    }
    .list-share-facebook a{
        color: #3b5998;
        &:hover{
            color: #2d4373;
        }
    }
    .list-share-pocket a{
        color: #ef4056;
        &:hover{
            color: #e9132e;
        }
    }
    .list-share-googleplus a{
        color: #ef4056;
        &:hover{
            color: #c23321;
        }
    }
    .list-share-pinterest a{
        color: #cb2027;
        &:hover{
            color: #9f191f;
        }
    }
    .list-share-linkedin a{
        color: #007bb6;
        &:hover{
            color: #005983
        }
    }
    .list-share-email a{
        color: #3490F3;
        &:hover{
            color: #0e76e6;
        }
    }
    .list-share-twitter a{
        color: #00aced;
        &:hover{
            color: #0087ba
        }
    }
}
</style>


<template>
    <div class="Breadcrumb">
        <div class="breadcrumb-wrapper">
            <ul class="breadcrumb-listing">
                <li><a href="#">Home</a></li>
                <li><a href="#">Lifestyle</a></li>
                <li><a href="#">Post</a></li>
            </ul>
            <div class="mask"></div>
        </div>
    </div>
</template>

<style lang="less">
.Breadcrumb{
    position: relative;
    .breadcrumb-wrapper{
        position: relative;
        padding: 150px 20px;
        background-repeat: no-repeat !important;
        background-attachment: fixed !important;
        background-size: cover !important;
        background-position: center center !important;
        background-image: url(../../assets/img/two.jpeg);
        .breadcrumb-listing{
            position: relative;
            z-index: 2;
            text-align: center;
            li{
                display: inline-block;
                padding-right: 40px;
                a{
                    position: relative;
                    color: #fff;
                    text-transform: uppercase;
                    &::after{
                            content: '\f105';
                            font-family: 'fontAwesome';
                            position: absolute;
                            bottom: -3px;
                            right: -22px;
                    }
                }
                &:last-child{
                    a::after{
                        content: '';
                    }
                }
            }
        }
    }
}
</style>

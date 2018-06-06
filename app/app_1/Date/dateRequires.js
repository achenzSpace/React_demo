import 'jquery'

export function Get(Url,dateMsg) {
    $.ajax({
        url: Url,
        method: 'get',
        data:dateMsg,
        success: (res) => {
            return res
        }
    })
}

export function Post(Url,dateMsg) {
    $.ajax({
        url: Url,
        method: 'post',
        data:dateMsg,
        success: (res) => {
            return res
        }
    })
}
// 猜你喜欢
export function homeAd() {
    return [{
        label:'123',
        imgUrl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1694117781,1950339353&fm=58&s=32931CCFD452C1CE4810383C0300505A',
        url:'http://www.iqiyi.com/v_19rrk3nlys.html?vfm=bdvtxfrp=v.baidu.com%2Fmovie_intro%2Fkwid=25616'
    },{
        label:'111',
        imgUrl:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1309020491,1745596875&fm=58&s=D7E4BD4488CF2A4F2C7C1410030010C8',
        url:'https://v.qq.com/x/cover/84cu4uxrkzi0e60.html'
    },{
        label:'123',
        imgUrl:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1408513369,1826438315&fm=58&s=9F384C87448224EB4EB248E80300E018',
        url:'https://v.qq.com/x/cover/84cu4uxrkzi0e60.html'
    },{
        label:'111',
        imgUrl:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1554686281,1943708366&fm=58&s=251E3FD7F8D133F91CBCD76B0300E064',
        url:'https://v.qq.com/x/cover/84cu4uxrkzi0e60.html'
    },{
        label:'123',
            imgUrl:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1605929701,1889003550&fm=58&s=67249943DCFA17BD8E35491C03001042',
        url:'https://v.qq.com/x/cover/84cu4uxrkzi0e60.html'
    },{
        label:'111',
            imgUrl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1435033185,1531396464&fm=58&s=752A6FFB4431AFDE5878B822030040C3',
        url:'https://v.qq.com/x/cover/84cu4uxrkzi0e60.html'
    },{
        label:'123',
            imgUrl:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2982249976,2581798816&fm=58&s=07777884985231F71E09999A03005082',
        url:'https://v.qq.com/x/cover/84cu4uxrkzi0e60.html'
    },{
        label:'111',
            imgUrl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=820560804,1190354737&fm=58&s=60125F9E326272B08D2991DC0300A025',
        url:'https://v.qq.com/x/cover/84cu4uxrkzi0e60.html'
    }]

}
// List
export function homeList(cityName,page) {
    console.log(cityName)
    var data =[];
    if (page === 0){
        return {
            data:[
                {
                    id:0,
                    imgUrl:'https://static.huohu123.com/2018-04-15/5ad307b7c4747.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品1'
                },{
                    id:1,
                imgUrl:'https://static.huohu123.com/2018-04-27/5ae2998f13c22.png',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品2'
                },{
                    id:2,
                    imgUrl:'http://i1.qhimg.com/t016043307d598411fc.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品3'
                }
            ],
            more:true
        }
    }else if(page === 1){
        return {
            data:[
                {
                    id:3,
                    imgUrl:'https://static.huohu123.com/2018-04-15/5ad307b7c4747.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品4'
                },{
                    id:4,
                    imgUrl:'https://static.huohu123.com/2018-04-27/5ae2998f13c22.png',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品5'
                },{
                    id:5,
                    imgUrl:'http://i1.qhimg.com/t016043307d598411fc.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品6'
                }
            ],
            more:true
        }
    }else if(page === 2){
        return {
            data:[
                {
                    id:6,
                    imgUrl:'https://static.huohu123.com/2018-04-15/5ad307b7c4747.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品7'
                },{
                    id:7,
                    imgUrl:'https://static.huohu123.com/2018-04-27/5ae2998f13c22.png',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品8'
                },{
                    id:8,
                    imgUrl:'http://i1.qhimg.com/t016043307d598411fc.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品9'
                }
            ],
            more:true
        }
    }else if(page === 3){
        return {
            data:[
                {
                    id:9,
                    imgUrl:'https://static.huohu123.com/2018-04-15/5ad307b7c4747.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品10'
                },{
                    id:10,
                    imgUrl:'https://static.huohu123.com/2018-04-27/5ae2998f13c22.png',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品11'
                },{
                    id:11,
                    imgUrl:'http://i1.qhimg.com/t016043307d598411fc.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品12'
                }
            ],
            more:true
        }
    }else if(page === 4){
        return {
            data:[
                {
                    id:12,
                    imgUrl:'https://static.huohu123.com/2018-04-15/5ad307b7c4747.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品13'
                },{
                    id:13,
                    imgUrl:'https://static.huohu123.com/2018-04-27/5ae2998f13c22.png',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品14'
                },{
                    id:14,
                    imgUrl:'http://i1.qhimg.com/t016043307d598411fc.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品15'
                }
            ],
            more:false
        }
    }
}
// 搜索 search
export function getSearchData(cityName,type,page) {
    console.log('获取数据：cityName=',cityName);
    console.log(type);
    if (page === 0){
        return {
            data:[
                {
                    imgUrl:'https://static.huohu123.com/2018-04-15/5ad307b7c4747.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品1'
                },{
                    imgUrl:'https://static.huohu123.com/2018-04-27/5ae2998f13c22.png',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品2'
                },{
                    imgUrl:'http://i1.qhimg.com/t016043307d598411fc.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品3'
                }
            ],
            more:true
        }
    }else if(page === 1){
        return {
            data:[
                {
                    imgUrl:'https://static.huohu123.com/2018-04-15/5ad307b7c4747.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品4'
                },{
                    imgUrl:'https://static.huohu123.com/2018-04-27/5ae2998f13c22.png',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品5'
                },{
                    imgUrl:'http://i1.qhimg.com/t016043307d598411fc.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品6'
                }
            ],
            more:true
        }
    }else if(page === 2){
        return {
            data:[
                {
                    imgUrl:'https://static.huohu123.com/2018-04-15/5ad307b7c4747.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品7'
                },{
                    imgUrl:'https://static.huohu123.com/2018-04-27/5ae2998f13c22.png',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品8'
                },{
                    imgUrl:'http://i1.qhimg.com/t016043307d598411fc.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品9'
                }
            ],
            more:true
        }
    }else if(page === 3){
        return {
            data:[
                {
                    imgUrl:'https://static.huohu123.com/2018-04-15/5ad307b7c4747.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品10'
                },{
                    imgUrl:'https://static.huohu123.com/2018-04-27/5ae2998f13c22.png',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品11'
                },{
                    imgUrl:'http://i1.qhimg.com/t016043307d598411fc.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品12'
                }
            ],
            more:true
        }
    }else if(page === 4){
        return {
            data:[
                {
                    imgUrl:'https://static.huohu123.com/2018-04-15/5ad307b7c4747.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品13'
                },{
                    imgUrl:'https://static.huohu123.com/2018-04-27/5ae2998f13c22.png',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品14'
                },{
                    imgUrl:'http://i1.qhimg.com/t016043307d598411fc.jpg',
                    price:'单价：￥15.8',
                    connect:'网站代码教程，以及文学爱好和视频音乐赏析，这是一个很不错的网站，希望大家多多喜欢，每日更新你所需要的软件教程',
                    buy:'已售：130',
                    long:'1km',
                    product:'产品15'
                }
            ],
            more:false
        }
    }
}
//  评论 comment
export function getComment(productId,page) {
    console.log('page:',page);
    switch (productId){
        case 0:
            if (page === 0){
                return {
                    data:[
                        {
                            headerImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=525793114,2060865463&fm=27&gp=0.jpg',
                            username:'1号',
                            comment:'We\'ve never been this excited about React Router. Like you, we\'ve learned a lot about React since we first picked it up. We built a Router the best we knew how along the way. What we\'ve learned most is that we love React because of its declarative composability.',
                            like:111,
                            commentCount:12,
                        },
                        {
                            headerImg:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg',
                            username:'2号',
                            comment:'We\'ve never been this excited about React Router. Like you, we\'ve learned a lot about React since we first picked it up. We built a Router the best we knew how along the way. What we\'ve learned most is that we love React because of its declarative composability.',
                            like:22,
                            commentCount:3,
                        },
                        {
                            headerImg:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2728030217,1983836315&fm=27&gp=0.jpg',
                            username:'3号',
                            comment:'We\'ve never been this excited about React Router. Like you, we\'ve learned a lot about React since we first picked it up. We built a Router the best we knew how along the way. What we\'ve learned most is that we love React because of its declarative composability.',
                            like:4,
                            commentCount:7,
                        }
                    ],
                    more:true
                }
            }else {
                return {
                    data:[
                        {
                            headerImg:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=489423423,2450269323&fm=27&gp=0.jpg',
                            username:'4号',
                            comment:'We\'ve never been this excited about React Router. Like you, we\'ve learned a lot about React since we first picked it up. We built a Router the best we knew how along the way. What we\'ve learned most is that we love React because of its declarative composability.',
                            like:111,
                            commentCount:12,
                        },
                        {
                            headerImg:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1760172527,1473711532&fm=27&gp=0.jpg',
                            username:'5号',
                            comment:'We\'ve never been this excited about React Router. Like you, we\'ve learned a lot about React since we first picked it up. We built a Router the best we knew how along the way. What we\'ve learned most is that we love React because of its declarative composability.',
                            like:22,
                            commentCount:3,
                        },
                        {
                            headerImg:'http://img4.imgtn.bdimg.com/it/u=2913061120,181996338&fm=27&gp=0.jpg',
                            username:'6号',
                            comment:'We\'ve never been this excited about React Router. Like you, we\'ve learned a lot about React since we first picked it up. We built a Router the best we knew how along the way. What we\'ve learned most is that we love React because of its declarative composability.',
                            like:4,
                            commentCount:7,
                        }
                    ],
                    more:page > 4 ? false:true
                }
            }


        case 1:
            return  {
                    data:[{
                        headerImg:'http://img4.imgtn.bdimg.com/it/u=3735751772,2144245584&fm=27&gp=0.jpg',
                        username:'22号',
                        comment:'We\'ve never been this excited about React Router. Like you, we\'ve learned a lot about React since we first picked it up. We built a Router the best we knew how along the way. What we\'ve learned most is that we love React because of its declarative composability.',
                        like:111,
                        commentCount:12,
                    },{
                        headerImg:'http://img5.imgtn.bdimg.com/it/u=1195897648,1318479913&fm=200&gp=0.jpg',
                        username:'23号',
                        comment:'We\'ve never been this excited about React Router. Like you, we\'ve learned a lot about React since we first picked it up. We built a Router the best we knew how along the way. What we\'ve learned most is that we love React because of its declarative composability.',
                        like:111,
                        commentCount:12,
                    },{
                        headerImg:'http://img3.imgtn.bdimg.com/it/u=3462862480,2265157239&fm=27&gp=0.jpg',
                        username:'24号',
                        comment:'We\'ve never been this excited about React Router. Like you, we\'ve learned a lot about React since we first picked it up. We built a Router the best we knew how along the way. What we\'ve learned most is that we love React because of its declarative composability.',
                        like:111,
                        commentCount:12,
                    },{
                        headerImg:'http://img1.imgtn.bdimg.com/it/u=3383672678,1250361345&fm=27&gp=0.jpg',
                        username:'25号',
                        comment:'We\'ve never been this excited about React Router. Like you, we\'ve learned a lot about React since we first picked it up. We built a Router the best we knew how along the way. What we\'ve learned most is that we love React because of its declarative composability.',
                        like:111,
                        commentCount:12,
                    }],
                    more:false
                }
        case 2:
            return {
                data: [{
                    headerImg: 'http://img0.imgtn.bdimg.com/it/u=3342626170,3246893232&fm=27&gp=0.jpg',
                    username: '22号',
                    comment: 'We\'ve never been this excited about React Router. Like you, we\'ve learned a lot about React since we first picked it up. We built a Router the best we knew how along the way. What we\'ve learned most is that we love React because of its declarative composability.',
                    like: 111,
                    commentCount: 12,
                }],
                more: false
            }
        case 3:
            return {
                data: [{
                    headerImg: 'http://img5.imgtn.bdimg.com/it/u=3623408756,2981161507&fm=200&gp=0.jpg',
                    username: '22号',
                    comment: 'We\'ve never been this excited about React Router. Like you, we\'ve learned a lot about React since we first picked it up. We built a Router the best we knew how along the way. What we\'ve learned most is that we love React because of its declarative composability.',
                    like: 111,
                    commentCount: 12,
                }],
                more: false
            }
        case 4:
            return {
                data: [{
                    headerImg: 'http://img1.imgtn.bdimg.com/it/u=3465577192,1894849675&fm=27&gp=0.jpg',
                    username: '22号',
                    comment: 'We\'ve never been this excited about React Router. Like you, we\'ve learned a lot about React since we first picked it up. We built a Router the best we knew how along the way. What we\'ve learned most is that we love React because of its declarative composability.',
                    like: 111,
                    commentCount: 12,
                }],
                more: false
            }
        case 5:
            return {
                data: [{
                    headerImg: 'http://img4.imgtn.bdimg.com/it/u=3682450743,2807201957&fm=27&gp=0.jpg',
                    username: '22号',
                    comment: 'We\'ve never been this excited about React Router. Like you, we\'ve learned a lot about React since we first picked it up. We built a Router the best we knew how along the way. What we\'ve learned most is that we love React because of its declarative composability.',
                    like: 111,
                    commentCount: 12,
                }],
                more: false
            }
        case 6:
            return {
                data: [{
                    headerImg: 'http://img1.imgtn.bdimg.com/it/u=3099062169,2136497672&fm=27&gp=0.jpg',
                    username: '22号',
                    comment: 'We\'ve never been this excited about React Router. Like you, we\'ve learned a lot about React since we first picked it up. We built a Router the best we knew how along the way. What we\'ve learned most is that we love React because of its declarative composability.',
                    like: 111,
                    commentCount: 12,
                }],
                more: false
            }
        case 7:
            return {
                data: [{
                    headerImg: 'http://img2.imgtn.bdimg.com/it/u=3231485054,2328858124&fm=27&gp=0.jpg',
                    username: '22号',
                    comment: 'We\'ve never been this excited about React Router. Like you, we\'ve learned a lot about React since we first picked it up. We built a Router the best we knew how along the way. What we\'ve learned most is that we love React because of its declarative composability.',
                    like: 111,
                    commentCount: 12,
                }],
                more: false
            }
        case 8:
            return {
                data: [{
                    headerImg: 'http://img3.imgtn.bdimg.com/it/u=2092560416,936874351&fm=27&gp=0.jpg',
                    username: '22号',
                    comment: 'We\'ve never been this excited about React Router. Like you, we\'ve learned a lot about React since we first picked it up. We built a Router the best we knew how along the way. What we\'ve learned most is that we love React because of its declarative composability.',
                    like: 111,
                    commentCount: 12,
                }],
                more: false
            }
        default:
            return {
                data: [{
                    headerImg: 'http://img0.imgtn.bdimg.com/it/u=2638770434,3243831404&fm=27&gp=0.jpg',
                    username: '22号',
                    comment: 'We\'ve never been this excited about React Router. Like you, we\'ve learned a lot about React since we first picked it up. We built a Router the best we knew how along the way. What we\'ve learned most is that we love React because of its declarative composability.',
                    like: 111,
                    commentCount: 12,
                }],
                more: false
            }

    }
}

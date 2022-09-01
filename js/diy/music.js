const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: 'Merry Christmas Mr. Lawrence',
        artist: '坂本龙一 /Jaques Morelenbaum /Judy Kang',
        url: 'https://dl.stream.qqmusic.qq.com/C400004VJYIa24UnIF.m4a?guid=6621999415&vkey=EADC4FBA73185D84325A49D41AF6D97CE5A7520B95716D9E5BAB9E031E9645150CD48AF4B7C34CC081F7C5097A88C42EF630D09D6F714523&uin=1937677785&fromtag=120032',
        cover: 'https://y.qq.com/n/ryqq/songDetail/002OsIFu1uqspM',
    }, 
	]
});
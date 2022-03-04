window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});

var btn = document.getElementById('btn');
var sider = document.getElementById('sider');

window.addEventListener('resize', function(){
        var sider = document.querySelector('#sider');
        sider.classList.remove('active');
        var btn = document.querySelector('#btn');
        btn.classList.remove('clicked');
});

btn.onclick = function(){
    sider.classList.toggle('active');
    btn.classList.toggle('clicked');
}
document.onclick = function(e){
    if(e.target.id != 'btn')
    {
        sider.classList.remove('active');
        btn.classList.remove('clicked');
    }
}
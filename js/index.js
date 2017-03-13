$(document).ready(function() {
        $('#pagepiling').pagepiling({
            sectionsColor: ['#26526b', '#4981a2', '#3386a6', '#30c2aa', '#c16a73'],
            loopBottom: true,
            navigation:{
                'bulletsColor': '#fff',
                'position': 'right',
                'tooltips': ['首页', '教育', '技能', '工作', '联系']
            }
        });
        $('.initing').removeClass('initing');
    });


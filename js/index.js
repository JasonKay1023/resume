$(document).ready(function() {
        $('#pagepiling').pagepiling({
            sectionsColor: ['#26526b', '#4981a2', '#3386a6', '#30c2aa', '#c16a73'],
            loopBottom: true,
            navigation:{
                'bulletsColor': '#fff',
                'position': 'right',
                'tooltips': ['首页', '项目', '技能', '教育', '工作', '联系']
            }
        });
        $('.initing').removeClass('initing');
    });


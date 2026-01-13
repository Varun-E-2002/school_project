let images = [
    "https://scontent.fmaa12-2.fna.fbcdn.net/v/t39.30808-6/486919236_1165111665407654_5470989272689635009_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=iB2DcY7dFHwQ7kNvwEDcq28&_nc_oc=AdlXoNt7RjcTrvLZeqhxu82rIw-dqt-NfYHeCYUqtosLoUyM4dJW9WxbufrK1zjZxkfO4VUSIpyJG9gR-ZLGSkI7&_nc_zt=23&_nc_ht=scontent.fmaa12-2.fna&_nc_gid=AQMjkMbROWhVGMNho-xy2g&oh=00_Afk45wHBBqyInevbUJpKn6m2RRdIb6RRACKuDnkvO2js3w&oe=69571C1A",
    "https://scontent.fmaa12-2.fna.fbcdn.net/v/t39.30808-6/581958711_1355385926380226_6612361436343100219_n.jpg?stp=c352.0.576.576a_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=50ad20&_nc_ohc=t60du6QIKfcQ7kNvwFzU6-p&_nc_oc=Adnljq1osjV4QblXgWXtVLHzpGnGipYHwGgtTsh0Fw8-j51rYBfKzbL3p7L67J2U6_R_iADjfdtq4XUoALILa0lJ&_nc_zt=23&_nc_ht=scontent.fmaa12-2.fna&_nc_gid=WDaCAqfhspZUPvE9UDDz2g&oh=00_AflZHEWHleziyBn59JEnsuooV4cr4mppWIOBGpCYIOD42Q&oe=69573444"
];

let index = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url("${images[index]}")`;
    index = (index + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 3000);
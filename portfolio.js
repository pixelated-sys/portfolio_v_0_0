

if(window.innerWidth >= 1100){
    var contact = document.getElementsByClassName("contact")[0];
    var works = document.getElementsByClassName("work")[0];
    var hello = document.getElementById("helloWorld");

    hello.addEventListener("click",helloClicked);
    contact.addEventListener("click",contactClicked);
    works.addEventListener("click",worksClicked);

    var count = 1;

    function anyClick(){
        if(count === 1){
            var picContainer = document.getElementsByClassName("profile_pic")[0];
            picContainer.setAttribute("class","fill_black");
            count++;
        }
        
    }

    function contactClicked(){
        anyClick();
        var pic = document.getElementsByClassName("photo")[0];
        var anc = document.getElementsByClassName("link")[0];
        anc.setAttribute("href","https://www.linkedin.com/in/praveen-v-468730285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app");
        pic.setAttribute("src","./images/linkedin-svgrepo-com.svg");
        pic.setAttribute("alt","linkedIn logo");
        pic.classList.add("linkedIn");
    }

    function worksClicked(){
        anyClick();
        var pic = document.getElementsByClassName("photo")[0];
        var anc = document.getElementsByClassName("link")[0];
        anc.setAttribute("href","https://github.com/pixelated-sys");
        pic.setAttribute("src","./images/github-142-svgrepo-com.svg");
        pic.setAttribute("alt","Github logo");
    }

    function helloClicked(){
        anyClick();
        var pic = document.getElementsByClassName("photo")[0];
        var anc = document.getElementsByClassName("link")[0];
        anc.setAttribute("href","#");
        pic.setAttribute("src","./images/portfolio_pic.jpg");
        pic.setAttribute("alt","Praveen - a human being");
        pic.setAttribute("class","photo");
    }
}

if(window.innerWidth < 1099){
    var contact = document.getElementsByClassName("contact")[0].firstChild;
    contact.setAttribute("href","https://www.linkedin.com/in/praveen-v-468730285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app");
    var work = document.getElementsByClassName("work")[0].firstChild;
    work.setAttribute("href","https://github.com/pixelated-sys");
}

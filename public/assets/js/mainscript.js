function showPhoto() { // Album func
    var album = document.getElementById('photo');
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");

    var images = new Array(15);
    var titles = new Array(15);
    var path = "images/photo/";

    var n = 15;

    for (var i = 0; i < n; i++) {
        titles[i] = "photo" + (i + 1);
        images[i] = path + (i + 1) + ".jpg";
    }

    for (var i = 0; i < n / 3; i++) {
        var row = document.createElement("TR");
        // Создать все ячейки
        for (var j = 0; j < 3; j++) {
            // Создать и заполнить элемент <td>
            var cell = document.createElement("td");
            var photo = document.createElement('img');
            photo.src = images[j + (3 * i)];
            photo.setAttribute('title', titles[j + (3 * i)]);
            cell.appendChild(photo);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    album.appendChild(table);
}

function interestsList(type) { // Interest func
    document.write("<" + type + "l>");
    var n = (interestsList.arguments.length - 1) / 2;
    for (var i = 1; i <= n; i++) {
        document.write("<li><a href=\"\#" + interestsList.arguments[n + i] + "\">" + interestsList.arguments[i] + "</a></li>");
    }
    document.write("</" + type + "l>")
}


function validateContactForm() { // Validate contact func

    var fio = document.getElementsByName('FIO');
    if (fio[0].value == "") {
        alert("Введите все поля")
    }
    else if (fio[0].value.split(" ").length !== 3) {
        alert("Введите ваше полное ФИО");
        document.getElementsByName('FIO')[0].focus();
        return false;
    }

    if (document.getElementsByName('e-mail')[0].value == "") {
        alert("Введите все поля");
        document.getElementsByName('e-mail')[0].focus();
        return false;
    }

    var phone = document.getElementsByName("phone");
    if (phone[0].value == "") {
        alert("Введите все поля")
        return false;
    }
    else if (!(/\+[73]\d{9,11}$/.test(phone[0].value))) {
        alert("Введите правильный номер телефона");
        phone[0].focus();
        return false;
    }
}

function validateFio() {
    var fio = document.getElementById("useFIO")
    if (!fio.value) {
        fio.focus();
        alert("Введите ФИО корректно");
        return false;
    }
    else {
        var arr = fio.value.split(' ');
        if (arr.length < 3) {
            fio.focus();
            alert("Введите ФИО полностью");
            return false;
        }
    }
    return true;
}

function validateText() {
    var txt1 = document.getElementById("quest11")
    if (!txt1.value) {
        alert("Пожалуйста ответьте на вопрос № 1 ");
        txt1.focus();
        return false;
    }
    else {
        var arr = txt1.value.split(' ');
        if (arr.length < 30) {
            alert("Вы ввели меньше 30 слов");
            txt1.focus();
            return false;
        }
    }
    return true;
}

function validateRadio() {
    var radio = document.getElementsByName("bjd");
    var b = false;
    for (var i = 0; i < radio.length; ++i) {
        if (radio[i].checked) {
            b = true;
            break;
        }
    }
    if (!b) {
        alert("Заполните все поля");
        radio.focus();
        return false;
    }
    return true;
}

//{-------------LAB_3----------------}

function navHover() {

    var li = document.querySelectorAll('li:not(.active)');

    for (var i = 0; i < li.length; i++) {
        li[i].getElementsByTagName('a');
        li[i].addEventListener('mouseenter', HoverON);
        li[i].addEventListener('mouseleave', HoverOFF);




        function HoverON() {

            this.firstElementChild.style.backgroundColor = "rgba(217, 158, 69, .5)";

        }

        function HoverOFF() {
            this.firstElementChild.style.backgroundColor = 'transparent';
        }

    }
}

//{-----------DROP_MeNU---------}
function dropDownMenu() {
    var elem = document.querySelector('#menu ul').getElementsByTagName('li')[2];
    elem.setAttribute('class', 'main-item');
    // var liIneres = document.querySelector('nav ul').getElementsByTagName('li')[2];
    var ul = document.createElement("ul");
    ul.setAttribute('class', 'sub-menu');
    var listItem = Array("Хобби", "Книги", "Фильмы", "Лорем");
    var reffArray = Array("hobby", "books", "cinema", "lorem");

    for (var i = 0; i < 4; i++) {
        var li = document.createElement("li");
        var a = document.createElement("a");

        a.innerHTML = listItem[i];
        a.setAttribute("href", "myinter.html\#" + reffArray[i]);
        li.appendChild(a);
        ul.appendChild(li);
    }
    elem.appendChild(ul);


    var elems = document.getElementsByClassName("main-item");

    for (var i = 0; i < elems.length; i++) {
        elems[i].addEventListener('mouseenter', showSub, false);
        elems[i].addEventListener('mouseleave', hideSub, false);
    }

    function showSub() {
        if (this.children.length > 1) {
            this.children[i].style.height = "auto";
            this.children[i].style.opacity = "1";
            this.children[i].style.overflow = "visible";
        }
        else {
            return false;
        }
    }

    function hideSub() {
        if (this.children.length > 1) {
            this.children[i].style.height = "0";
            this.children[i].style.opacity = "0";
            this.children[i].style.overflow = "hidden";
        }
        else { return false; }
    }
}

//{--------------DATETIME----------------}
function date_time() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();


    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById("digital_watch").innerHTML = hours + ":" + minutes + ":" + seconds + "  " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    setTimeout("date_time()", 1000);
}

//{-------------CALENDAR----------------}

function Calendar() {
    var mainDiv = document.getElementById("calendar");
    var days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];



    function FillForm(num) {
        dateField.value = num + ' ' + month.value + years.value;
    }

    var dateField = document.getElementById('contactDate');
    var month = document.getElementById('month');
    var years = document.getElementById('years');
    var monthForDraw = 0;

    function addNullDays() {
        var years = document.getElementById('years');
        var month = document.getElementById('month');

        if (month.value == "January")
            monthForDraw = 0;
        if (month.value == "February")
            monthForDraw = 1;
        if (month.value == "March")
            monthForDraw = 2;
        if (month.value == "April")
            monthForDraw = 3;
        if (month.value == "May")
            monthForDraw = 4;
        if (month.value == "June")
            monthForDraw = 5;
        if (month.value == "July")
            monthForDraw = 6;
        if (month.value == "August")
            monthForDraw = 7;
        if (month.value == "September")
            monthForDraw = 8;
        if (month.value == "October")
            monthForDraw = 9;
        if (month.value == "November")
            monthForDraw = 10;
        if (month.value == "December")
            monthForDraw = 11;

        dateForDraw = new Date(years.value, monthForDraw, 1);
        numOfEmptyDivs = dateForDraw.getDay();

        if (numOfEmptyDivs !== 0) {
            for (i = 0; i < numOfEmptyDivs; i++) {
                var subDiv = document.createElement("div");
                subDiv.className = "calendarDay";
                mainDiv.appendChild(subDiv);
            }
        }
    }

    function daysInMonth(iMonth, iYear) {
        return 32 - new Date(iYear, iMonth, 32).getDate();
    }

    function addDaysNames() {
        for (i = 0; i < days.length; i++) {
            var subDiv = document.createElement("div");
            subDiv.innerHTML = days[i];
            subDiv.className = "calendarDay";
            mainDiv.appendChild(subDiv);
        }
    }

    function DrawCalenarBody() {
        for (i = 0; i < daysInMonth(monthForDraw, years.value); i++) {
            var subDiv = document.createElement("div");
            subDiv.className = "calendarDay";
            subDiv.innerHTML = i + 1;
            subDiv.addEventListener("click", function () { dateField.value = this.firstChild.nodeValue + ' ' + month.value + ' ' + years.value });
            mainDiv.appendChild(subDiv);
        }
    }

    function DeleteSubDivs() {
        while (mainDiv.firstElementChild) {
            mainDiv.firstElementChild.remove();
        }
    }

    var selectMonth = document.getElementById("month");
    var selectYears = document.getElementById("years");
    var monthOption = selectMonth.getElementsByTagName("option");
    selectMonth.onchange = function a() { DeleteSubDivs(); addDaysNames(); addNullDays(); DrawCalenarBody(); };
    selectYears.onchange = function b() { DrawNewCalendar() };

    function DrawNewCalendar() {
        DeleteSubDivs();
        addDaysNames();
        addNullDays();
        DrawCalenarBody();
    }

    FillForm(1);
    DrawNewCalendar();
}

//{----------------CheckContact------------------}
function swap_to_red(text) {
    document.getElementById('up-' + text).style.display = "block";
    document.getElementsByName(text)[0].classList.add("false");
    document.getElementsByName(text)[0].classList.remove("true");
}

function swap_to_green(text) {
    document.getElementsByName(text)[0].classList.add("true");
    document.getElementsByName(text)[0].classList.remove("false");
    document.getElementById('up-' + text).style.display = 'none'
}

function checkName() {
    var fio = document.getElementsByName('name');
    // var up_name = document.getElementById('up-name').getElementsByTagName("p")[0];
    if (fio[0].value == null || fio[0].value == "" || fio[0].value.split(" ").length !== 3) {
        swap_to_red('name');
        return false;
    } else {
        swap_to_green('name');
        return true;
    }
}


function checkPhone() {
    var phone = document.getElementsByName('phone');
    var up_phone = document.getElementById('up-phone').getElementsByTagName("p")[0];
    if (phone[0].value == "" || !(/\+[73]\d{9,11}$/.test(phone[0].value))) {
        swap_to_red('phone');
        return false;
    } else {
        swap_to_green('phone');
        return true;
    }
}

function checkE_mail() {
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var mail = document.getElementsByName('e-mail');
    if (document.getElementsByName('e-mail')[0].value == "" || !(pattern.test(mail[0].value))) {
        swap_to_red('e-mail');
        return false;
    } else {
        swap_to_green('e-mail');
        return true;
    }
}

function activate() {
    if (checkName() == true && checkPhone() == true && checkE_mail() == true)
        var button = document.getElementById('post').disabled = false;
    else
        var button = document.getElementById('post').disabled = true;
}

//{----------------PHOTO--------------}

function expand_photo() {

    NodeList.prototype.forEach = Array.prototype.forEach;

    let imgDiv = document.querySelector(".expanded .bigPhoto")

    document.querySelectorAll('.photo img')
        .forEach((img, i) => {
            img.addEventListener('click', e => {
                let bigImg = document.createElement('img');
                bigImg.src = `images/photo/${i + 1}.jpg`;
                bigImg.title = i + 1;
                imgDiv.innerHTML = " ";

                bigImg.onload = function () {
                    if (bigImg.width <= bigImg.height) {
                        bigImg.style.marginLeft = bigImg.width / 2 + "px";
                    }
                }
                imgDiv.appendChild(bigImg);
                document.querySelector(".bg-blur").classList.add("bg-blur1");
                document.querySelector(".expanded").classList.add("open");
            })
        })
}



function close_modal_form() {

    var cross = document.getElementsByClassName('cross')[0];
    var div = document.querySelector(".expanded ");
    var bgblur = document.querySelector(".bg-blur");

    cross.addEventListener('click', function () {
        div.classList.remove("open");
        bgblur.classList.remove("bg-blur1");
    });
}

function switchPhoto() {
    $(document).ready(function () {

        $('#next').click(function () {
            var bigImg = $('.bigPhoto').firstChild;
            var bigImg = $('.bigPhoto').find('img');
            var index = bigImg.attr('title');
            var newIndex = +index + +1;
            if (newIndex > 15) {
                newIndex = 1;
            }
            bigImg.remove();
            var div = $('.bigPhoto');
            div.prepend($('<img>', { id: 'theImg', src: 'images/photo/' + newIndex + '.jpg', title: newIndex }))
        });
    })

    $('#prev').click(function () {
        var bigImg = $('.bigPhoto').firstChild;
        var bigImg = $('.bigPhoto').find('img');
        var index = bigImg.attr('title');
        var newIndex = +index - +1;
        if (newIndex < 1) {
            newIndex = 15;
        }
        bigImg.remove();
        var div = $('.bigPhoto');
        div.prepend($('<img>', { id: 'theImg', src: 'images/photo/' + newIndex + '.jpg', title: newIndex }))
    });
}

//{---------------------COOCKIE----------------------}

function SaveCookies(cname) {
    var visits = getCookie(cname);
    // if the cookie wasn't found, this is your first visit
    if (!visits) {
        visits = 1; // the value for the new cookie
    } else {
        // increment the counter
        visits = parseInt(visits) + 1;
    }


    var foo = localStorage.getItem(cname);
    if (!foo) {
        foo = 1;
    } else {
        foo = parseInt(foo) + 1;
    }
    // set the new cookie
    localStorage.setItem(cname, foo);
    setCookie(cname, visits);
}



function viewSession() {
    var mainPage = parseInt(localStorage.getItem("index"));
    document.getElementById("mainS").innerHTML = returnResult(mainPage);

    var aboutPage = parseInt(localStorage.getItem("about"));
    document.getElementById("aboutS").innerHTML = returnResult(aboutPage);

    var interestsPage = parseInt(localStorage.getItem("myinter"));
    document.getElementById("interestsS").innerHTML = returnResult(interestsPage);

    var studyPage = parseInt(localStorage.getItem("study"));
    document.getElementById("studyS").innerHTML = returnResult(studyPage);

    var photoPage = parseInt(localStorage.getItem("photo"));
    document.getElementById("photoS").innerHTML = returnResult(photoPage);

    var contactPage = parseInt(localStorage.getItem("contact"));
    document.getElementById("contactS").innerHTML = returnResult(contactPage);

    var testPage = parseInt(localStorage.getItem("test"));
    document.getElementById("testS").innerHTML = returnResult(testPage);

    var historyPage = parseInt(localStorage.getItem("history"));
    document.getElementById("historyS").innerHTML = returnResult(historyPage);




    var keyMain = "index";
    var valueMain = document.cookie.match(new RegExp(
        "(?:^|; )" + keyMain.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));

    document.getElementById("mainC").innerHTML = valueMain ? decodeURIComponent(valueMain[1]) : "-";

    var keyAbout = "about";
    var valueAbout = document.cookie.match(new RegExp(
        "(?:^|; )" + keyAbout.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));

    document.getElementById("aboutC").innerHTML = valueAbout ? decodeURIComponent(valueAbout[1]) : "-";

    var keyInterests = "myinter";
    var valueInterests = document.cookie.match(new RegExp(
        "(?:^|; )" + keyInterests.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));

    document.getElementById("interestsC").innerHTML = valueInterests ? decodeURIComponent(valueInterests[1]) : "-";

    var keyStudy = "study";
    var valueStudy = document.cookie.match(new RegExp(
        "(?:^|; )" + keyStudy.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));

    document.getElementById("studyC").innerHTML = valueStudy ? decodeURIComponent(valueStudy[1]) : "-";

    var keyPhoto = "photo";
    var valuePhoto = document.cookie.match(new RegExp(
        "(?:^|; )" + keyPhoto.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));

    document.getElementById("photoC").innerHTML = valuePhoto ? decodeURIComponent(valuePhoto[1]) : "-";

    var keyContact = "contact";
    var valueContact = document.cookie.match(new RegExp(
        "(?:^|; )" + keyContact.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));

    document.getElementById("contactC").innerHTML = valueContact ? decodeURIComponent(valueContact[1]) : "-";

    var keyTest = "test";
    var valueTest = document.cookie.match(new RegExp(
        "(?:^|; )" + keyTest.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));

    document.getElementById("testC").innerHTML = valueTest ? decodeURIComponent(valueTest[1]) : "-";

    var keyHistory = "history";
    var valueHistory = document.cookie.match(new RegExp(
        "(?:^|; )" + keyHistory.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));

    document.getElementById("historyC").innerHTML = valueHistory ? decodeURIComponent(valueHistory[1]) : "-";

}



function returnResult(result) {
    if (isNaN(result)) {
        return " - "
    } else return result;
}


function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else
        begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1)
        end = dc.length;
    return unescape(dc.substring(begin + prefix.length, end));
}

function setCookie(name, value) {
    var curCookie = name + "=" + escape(value);
    document.cookie = curCookie;
}



function modalWindow() {
    $(function () {
        $("#post").click(function () {
            $(".expanded").addClass("open");
            $(".bg-blur").addClass("bg-blur1");

        })

        $(function () {
            $("#submitNo").click(function () {
                $(".expanded").removeClass("open");
                $(".bg-blur").removeClass("bg-blur1");
            })
        })
    })
}

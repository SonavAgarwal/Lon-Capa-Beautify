var doConfetti;

chrome.storage.sync.get({
    conf: true
}, function(items) {
    doConfetti = items.conf;
    try {
        if (!doConfetti) throw "naw";
        if (document.getElementsByName("lonhomework").length == 0) {
            chrome.storage.sync.set({
                previousNumberCorrect: 1000,
                previousLocation: document.title
            }, function() {
                //coming from not homework page
            });
        } else {
            var correctCount = document.getElementsByClassName("LC_answer_correct").length;
            chrome.storage.sync.get({
                previousNumberCorrect: 0,
                previousLocation: "hello"
            }, function(items) {
                if (correctCount > items.previousNumberCorrect && document.title == items.previousLocation) showConfetti();
            });
            chrome.storage.sync.set({
                previousNumberCorrect: correctCount,
                previousLocation: document.title
            }, function() {
                //incremented now
            });
        }
        
    } catch (error) {
        //confetti oofed
    }
});

try {
    var newHeader = document.createElement("div");
    var classTitle = document.createElement("div");
    classTitle.id = "beautify_classTitle";
    newHeader.id = "beautify_newHeader";
    
    classTitle.innerHTML = document.getElementById("LC_realm").innerHTML;
    // classTitle.style.margin = "0";
    
    
    newHeader.style.display = "flex";
    
    newHeader.append(classTitle);
    document.body.prepend(newHeader);
    
    var classMenu = document.getElementById("LC_secondary_menu");
    
    var classMenuLinks = document.createElement("div");
    classMenuLinks.id = "beautify_classLinks";
    
    for (var i = 0; i < classMenu.children.length; i++) {
        var midLink = document.createElement("a");
        midLink.classList.add("beautify_classMenuItems");
        midLink.innerHTML = classMenu.children[i].firstChild.innerHTML;
        midLink.href = classMenu.children[i].firstChild.href;
        classMenuLinks.append(midLink);
    }
    
    newHeader.append(classMenuLinks);
    
    var LCMenuLinks = document.createElement("div");
    LCMenuLinks.id = "beautify_LCMenu";
    
    
    var accountOptions = document.createElement("div");
    accountOptions.id = "beautify_accountOptions";
    var acctInfo1 = document.getElementById("LC_nav_bar").firstChild.firstChild.children[1];
    
    Array.from(acctInfo1.children).forEach(element => {
        accountOptions.insertAdjacentHTML( 'beforeend', element.innerHTML + "<br>");
    });
    
    Array.from(document.getElementsByClassName("LC_primary_menu")[1].children).forEach(element => {
        if (!element.innerHTML.includes("img"))
            accountOptions.insertAdjacentHTML( 'beforeend', element.innerHTML + "<br>");
        else {
            var newElement = document.createElement("a");
            newElement.href = element.firstChild.href;
            newElement.innerHTML = "About"; 
            accountOptions.append(newElement);
            accountOptions.insertAdjacentHTML( 'beforeend', "<br>");
    
        }
    });
    
    Array.from(accountOptions.children).forEach(element => {
        element.classList.add("beautify_accountMenuItems");
    });
    
    var account = document.createElement("a");
    account.classList.add("beautify_classMenuItems");
    account.id = "beautify_accountOptionsButton";
    account.innerHTML = "Account";
    LCMenuLinks.append(account);
    LCMenuLinks.append(accountOptions);
    newHeader.append(LCMenuLinks);
    
} catch (error) {
    //not there
}




try {
    document.getElementById("LC_realm").style.display = "none";
    document.getElementById("LC_nav_bar").style.display = "none";
    document.getElementsByClassName("LC_primary_menu")[1].style.display = "none";
    document.getElementById("LC_secondary_menu").style.display = "none";
} catch (error) {
    //not there
}


//problems

try {
    // document.getElementsByClassName("LC_breadcrumb_tools_tools")[0].style.display = "none";
    document.getElementsByClassName("LC_breadcrumb_tools_outerlist")[0].style.backgroundColor = "none";
} catch (error) {
    //wrong page
}

try {
    var lonHomework = document.getElementsByName("lonhomework")[0];
    var lonHomeworkInner = lonHomework.innerHTML;
    lonHomework.innerHTML = "";
    lonHomework.insertAdjacentHTML("afterbegin", "<div id = beautify_homeworkContainer>" + lonHomeworkInner + "</div>");
    lonHomework.id = "beautify_homework";
} catch (error) {
    //wrong page
}

try {
    document.getElementsByName("readchoices")[0].id = "beautify_discussions";
} catch (error) {
    //wrong page
}

try {
    document.getElementsByClassName("LC_feedback_link")[0].id = "beautify_feedback";
} catch (error) {
    //wrong page
}

try {
    document.getElementsByClassName("LC_TabContentBigger")[0].id = "beautify_tabs";
} catch (error) {
    //wrong page
}

try {
    Array.from(document.getElementsByClassName("LC_Box")).forEach(element => {
        element.classList.add("beautify_box");
    });
} catch (error) {
    //wrong page
}

try {
    Array.from(document.getElementsByClassName("LC_iframecontainer")).forEach(element => {
        element.classList.add("beautify_box");
    });
} catch (error) {
    //wrong page
}

try {
    document.getElementsByName("rolechoice")[0].classList.add("beautify_box");
    
} catch (error) {
    //wrong page
}

try {
    document.getElementsByClassName("LC_head_subbox")[0].classList.add("beautify_box");
    
} catch (error) {
    //wrong page
}

try {
    Array.from(document.getElementsByClassName("LC_menubuttons_link")).forEach(element => {
        if (element.title == "Previous content resource") {
            element.parentNode.classList.add("beautify_resourceNavButtons");
            element.innerHTML = "<";
        }
        if (element.title == "Next content resource") {
            element.parentNode.classList.add("beautify_resourceNavButtons");
            element.innerHTML = ">";
        }
    })
} catch (error) {
    //no arrows
}

function showConfetti() {
    var canv = document.createElement("canvas");
    canv.id = "confetti-canvas";
    canv.width = window.innerWidth;
    canv.height = window.innerHeight;
    canv.style.position = "fixed";
    canv.style.width = "100vw";
    canv.style.height = "100vh";
    canv.style.top = "0";
    canv.style.left = "0";
    canv.style.zIndex = "1000";
    canv.style.pointerEvents = "none";
    document.body.appendChild(canv);
    startConfetti(1500, 100, 200);
    // window.setTimeout(stopConfetti, 1000);
}
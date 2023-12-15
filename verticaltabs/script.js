const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");
const tabContentWrapper = document.querySelectorAll(".tab-content-wrapper");

const shiftTabs = (linkid) => {
    allTabs.forEach((tab, i) => {
        if (tab.id.includes(linkid)){
            allTabs.forEach((tabItem)=> {
                tabItem.style = 'transform: translateY(-${i*540}px);';
            });
        }
    });
}

allLinks.forEach(elem) => {
    elem.addEventListener('click', function(){
        const linkid = elem.id;
        const hrefLinkClick =  elem.href;
        
        allLinks.forEach((link,i) =>{
            if(link.href == hrefLinkClick){
                link.classList.add("active");
            } else {
                link.classList.remove('active');
            }
        });
        shiftTabs(linkid)
    });
};

//untuk menghandel semua properti seleksi pada loading

const currentHas =  window.location.hash;
let activeLink =  document.querySelector('.tabs a');

if (currentHas) {
    const visibleHash = document.getElementById(`${currentHash.replace('#', '')}`
    );

    if (visibleHash) {
        activeLink = visibleHash;
    }
}

activeLink.classList.toggle('active');

shiftTabs(activeLink.id);
export default function decorateBlock(block) {
    let tabsTitles = [...block.querySelectorAll(".adventure-tabs div > div:first-of-type")];
    tabsTitles.forEach(tabTitle => {
        tabTitle.setAttribute('active', 'false')
        tabTitle.nextElementSibling.setAttribute('active', 'false');
        let title = tabTitle.textContent;
        tabTitle.setAttribute('id', title.replace(/\s+/g, '-').toLowerCase()); //dashed lower case
        tabTitle.addEventListener('click', function(event) {
            tabTitle.setAttribute('active', 'true');
            tabTitle.nextElementSibling.setAttribute('active', 'true');
            let activeIndex = tabsTitles.indexOf(tabTitle);
            tabsTitles.forEach(tab => {
                if (tabsTitles.indexOf(tab) !== activeIndex) {
                    tab.setAttribute('active', 'false');
                    tab.nextElementSibling.setAttribute('active', 'false');
                } 
            });
        })
    });
    tabsTitles[0].setAttribute('active', 'true');
    tabsTitles[0].nextElementSibling.setAttribute('active', 'true')
}
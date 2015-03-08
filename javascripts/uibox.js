;(function(Sizzle) {

	var $S = Sizzle;

	// Tabs
	var tabs_links = $S('.tabs-links a');
	tabs_links.forEach(function( tl ) {
		tl.onclick = function( e ) {
			e.preventDefault();

			var newTab = $S(this.getAttribute('href'))[0];

			hideAllTabs();
			showTab(newTab);
      activeTab(this);
		}
	});

	function hideAllTabs() {
		var tabs_content = $S('.tabs-content div');
		tabs_content.forEach(function( tc ) {
			hideTab(tc);
		});
	};

	function showTab( tab ) {
		tab.style.display = 'inline-block';
	};

	function hideTab( tab ) {
		tab.style.display = 'none';
	};

  function activeTab( tab ) {
    var tabs_li = $S('.tabs-links li');
    tabs_li.forEach(function( li ){
      li.removeAttribute('class');
    }); 
    tab.parentNode.setAttribute('class', 'active');
  };

}(Sizzle, undefined));

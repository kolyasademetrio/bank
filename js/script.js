/*--------------------------------- Javascript ------------------------------------------*/	
/*--------------------------------- функция для часов -------------------------*/
function clock() {
	var d = new Date();
	var month_num = d.getMonth()
	var day = d.getDate();
	var hours = d.getHours();
	var minutes = d.getMinutes();

	month=new Array("января", "февраля", "марта", "апреля", "мая", "июня",
	"июля", "августа", "сентября", "октября", "ноября", "декабря");

	if (day <= 9) day = "0" + day;
	if (hours <= 9) hours = "0" + hours;
	if (minutes <= 9) minutes = "0" + minutes;

	date_time = day + " " + month[month_num] + ", " + hours + ":" + minutes;
	if (document.layers) {
	document.layers.doc_time.document.write(date_time);
	document.layers.doc_time.document.close();
	}
	else document.getElementById("doc_time").innerHTML = date_time;
	setTimeout("clock()", 1000);
}
/*--------------------------------- функция для часов End ---------------------*/
/*--------------------------------- Javascript End --------------------------------------*/





/*--------------------------------- jQuery ----------------------------------------------*/

$(document).ready(function(){
/*--------------------------------- функция для меню ---------------------------*/
	function setMenu() {
		var $openNav = $('.openNav_js'),
			$subListHidden = $('.nav__subListHidden_js'),
			$itemTitle = $('.nav__itemTitle_js'),
			$navList = $('.nav__list_js'),
			$navItem = $('.nav__item_js'),
			$navSubList = $('.nav__subList_js'),
			maxWidth750 = 'only screen and (max-width : 750px)',
			minWidth750 = 'only screen and (min-width : 750px)';

		// функция для открытия и закрытия меню в блоке nav при окне больше 750px
		function toggleMenu() {
			$openNav.on('click', function() {
				$subListHidden.slideToggle(500, function() {//открывает и закрывает основное меню
					$openNav.html($(this).is(':hidden') ? 'показать меню &darr;' : 'скрыть меню &uarr;');
				});
			});		
		}

		toggleMenu();
		// функция для открытия и закрытия меню в блоке nav при окне больше 750px End

		// функция для открытия и закрытия меню в блоке nav при окне меньше 750px
		function toggleMenuMini() {
			$navList.on('click', function(e) {
				var $target = $(e.target),
					$targetNext = $target.next('.nav__subList_js'),
					hasClass = $target.hasClass('nav__itemTitle_js'),
					floatValue = $navItem.css('float');

				if ( hasClass && floatValue === 'none') {//если клик по нужному блоку и меню находится в мобильной версии
					if ($targetNext.is(':hidden')) {//если пункт меню скрыт
						$navSubList.slideUp();//закрывает все пункты
						$targetNext.slideDown();//открывает тот по которому кликнули
					} else {
						$navSubList.slideUp();//иначе,если клик по открытому, то закрывает его
					}
				}
			});
		}

		toggleMenuMini();
		// функция для открытия и закрытия меню в блоке nav при окне меньше 750px End

		// открытие и закрытие меню в блоке nav при изменении окна браузера
		$(window).resize(function(){
			console.log(window.innerWidth);//вывод в консоль ширины окна браузера

			if ($navSubList.is(':hidden') && window.matchMedia(minWidth750).matches) {
				$navSubList.show();
				$subListHidden.hide();
			} else if (window.matchMedia(maxWidth750).matches) {
				$navSubList.hide();
				$subListHidden.show();
			} else if (window.matchMedia(minWidth750).matches) {
				$subListHidden.hide();
				$openNav.html('показать меню &darr;');
			}
		});
		// открытие и закрытие меню в блоке nav при изменении окна браузера End
	}

	setMenu();
/*--------------------------------- функция для меню End-----------------------------*/	
	
/*--------------------------------- функция для focus поля поиска -------------------*/
	function addRemBorder(foc, active, colorActive, colorBlur){
	    var $foc = $('.' + foc);
	    
	    var $active = $foc.parents('.' + active);
	    
	    $foc.on('focus', function(){
	      $active.css({'border':'1px solid #' + colorActive});
	    }).on('blur', function(){
	      $active.css({'border':'1px solid #' + colorBlur});
	    });
	}

	/* вызов функции для focus поля поиска */
	//credit_cards headBar__searchForm
	addRemBorder('headBar__inputSearch', 'headBar__searchFormWrap', '222', 'bdc3c7');

	//credit_cards searchForm
	addRemBorder('searchForm__inputSearch', 'searchForm__wrap', '222', 'bdc3c7');
/*--------------------------------- функция для focus поля поиска End----------------*/
		
/*--------------------------------- функция для вкладок -----------------------------*/
	function getTabs(tabsClass, sectionsClass, classActive){
		var $tabs = $('.' + tabsClass),
			$sections = $('.' + sectionsClass);

		$sections.not(':first').hide();

		$tabs.click(function(){
			$tabs.removeClass(classActive).eq($(this).index()).addClass(classActive);
			$sections.hide().eq($(this).index()).fadeIn();
		}).eq(0).addClass(classActive);
	}
	
	/* вызов функции вкладок */
	//asideTabs
	getTabs('asideTabs__tab', 'asideTabs__section', 'asideTabs__active');

	//forumTabs
	getTabs('forumTabs__tab', 'forumTabs__section', 'forumTabs__active');
/*--------------------------------- функция для вкладок End -------------------------*/

/*--------------------------------- функция для карусели -------------------------*/
	function getCarousel(list, element, arrowRight, arrowLeft) {
		var $list = $('.' + list),
			$element = $('.' + element),
			$arrowRight = $('.' + arrowRight),
			$arrowLeft = $('.' + arrowLeft),
			elemWidth = $element.outerWidth(true);

		$list.css({'left' : -elemWidth}).prepend($element.last());

		function nextSlide() {
			$list.animate({'margin-left' : -elemWidth}, 500, function(){
				$('.' + element).first().appendTo($list);
				$list.css({'margin-left' : 0});
			});
		}

		function prevSlide() {
			$list.animate({'margin-left' : elemWidth}, 500, function(){
				$('.' + element).last().prependTo($list);
				$list.css({'margin-left' : 0});
			});
		}

		$arrowRight.click(function(){
			nextSlide();
		});

		$arrowLeft.click(function(){
			prevSlide();
		});
	}

	/* вызов функции для карусели carouselSimple */
	getCarousel('carouselSimple__list', 'carouselSimple__item', 'carouselSimple__arrowRight', 'carouselSimple__arrowLeft');
/*--------------------------------- функция для карусели End -------------------------*/

/*--------- функция для псевдоссылки(показать скрыть скрытые параграфы) --------------*/
	function toggleHiddenParagrafs() {
		var $showHide = $('.readMore__showHide'),
			$hiddenParagraph = $('.readMore__hidden'),
			toggled = true;

		$showHide.click(function(){
			$hiddenParagraph.toggle();

			$(this).text(toggled ? 'Свернуть' : 'Читать дальше');

			toggled = !toggled;
		});
	}

	toggleHiddenParagrafs();
/*--------- функция для псевдоссылки(показать скрыть скрытые параграфы) End -----------*/

	 
});

/*--------------------------------- jQuery End ---------------------------------*/






/*карусель на странице Rate of exchange(второй вариант) START !!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
$(document).ready(function(){
	var width = $('.carouselElement').width();
	
	$('.carouselList').css('left', -width);
	
	$('.carouselList>li.carouselElement:last-child').prependTo('.carouselList');
	
	function nextSlide() {
		$('.carouselList').animate({'margin-left':-width},500,function(){
			$('.carouselList>li:first-child').appendTo('.carouselList');
			$('.carouselList').css('margin-left',0);
		});
	}
	
	function prevSlide() {
		$('.carouselList').animate({'margin-left':width},500,function(){
			$('.carouselList>li:last-child').prependTo('.carouselList');
			$('.carouselList').css('margin-left',0);
		});
	}
	
	$('.carouselArrowRight').click(nextSlide);
	
	$('.carouselArrowLeft').click(prevSlide);
	
});
/*карусель на странице Rate of exchange(второй вариант) END !!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

/*карусель на странице Rate of exchange(второй вариант) 2 START !!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
$(document).ready(function(){
	var width = $('.carouselElement2').width();
	
	$('.carouselList2').css('left', -width);
	
	$('.carouselList2>li.carouselElement2:last-child').prependTo('.carouselList2');
	
	function nextSlide() {
		$('.carouselList2').animate({'margin-left':-width},500,function(){
			$('.carouselList2>li:first-child').appendTo('.carouselList2');
			$('.carouselList2').css('margin-left',0);
		});
	}
	
	function prevSlide() {
		$('.carouselList2').animate({'margin-left':width},500,function(){
			$('.carouselList2>li:last-child').prependTo('.carouselList2');
			$('.carouselList2').css('margin-left',0);
		});
	}
	
	$('.carouselArrowRight2').click(nextSlide);
	
	$('.carouselArrowLeft2').click(prevSlide);
	
	var hiddenButtons = $('.carouselArrowLeft2,.carouselArrowRight2');
	var a = $('.carousHiderWrapper2');
	
	a.hover(function(){
		hiddenButtons.show();
	}, function(){
		hiddenButtons.hide();
	});
	
	
});
/*карусель на странице Rate of exchange(второй вариант) 2 END !!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

//code for Equal columns START
function setEqualHeight(columns) {
	var tallestcolumn = 0;
	
	columns.each( function(){
		currentHeight = $(this).height();
		if (currentHeight > tallestcolumn) {
			tallestcolumn = currentHeight;
		}
	});
	
	columns.height(tallestcolumn);
}

$(document).ready(function(){
	/* setEqualHeight($(".sug")); */ //в safari некорректно меняло высоту блока..пока закомментировал
	setEqualHeight($(".sugInfo"));
	setEqualHeight($(".wrapName"));
	setEqualHeight($(".offerPercents"));
	setEqualHeight($(".consumerBlock7 .offerItem .title"));
	setEqualHeight($(".consumerBlock7 .offerItem .infoInner"));
});
//code for Equal columns END

/* pop up window for News feed START*/
$(document).ready(function(){
	$('.popUp').prepend('<div class="close"></div>');//создаем кнопку с классом Close
	
	var popup_name;//переменная для ID
	
	var url;//переменная для адреса видео
	
	$('.newsVideoItem').click(function(){
		
		popup_name = $(this).attr('id').substring(4);//записываем в переменную правую часть ID элемента по которому кликнули
		
		url = $('#' + popup_name).children('iframe').attr('src');
		
		$('#' + popup_name).css({
			marginTop: '-' + ($("#" + popup_name).height() / 2 + 30) + 'px',//позиционируем модальное окно по центру
			marginLeft: '-' + ($("#" + popup_name).width() / 2 + 30) + 'px'//позиционируем модальное окно по центру
		}).fadeIn(300);
		
		$('.overlay').fadeIn(300);
		
		$('#' + popup_name).children('iframe').attr('src', url);
		
		OffScroll ();//убираем прокрутку заднего плана
		
	});
	
	$('.close, .overlay').click(function(){
		
		$("#" + popup_name).hide();
		
		$('.overlay').hide();
		
		var urlTemp = $('#' + popup_name).children('iframe').attr('src');
		
		$('#' + popup_name).children('iframe').attr('src', '');
		
		$('#' + popup_name).children('iframe').attr('src', urlTemp);
		
		$(window).unbind('scroll');//возвращаем прокрутку заднего плана
	});
	
	function OffScroll () {
		
		var winScrollTop = $(window).scrollTop();
		
		$(window).bind('scroll',function () {
			$(window).scrollTop(winScrollTop);
		});
	}

});
/* pop up window for News feed STOP*/

//скрипт для пагинатора для Press_review
 $(document).ready(function(){
 	$('.newsFeed').pajinate({
 		items_per_page : 4,
 		item_container_id : '.newsBlock',
 		nav_panel_id : '.alt_page_navigation',
 		num_page_links_to_display : 4
 	});
 	$('.alt_page_navigation').append('<a href="#" class="up">Наверх &uarr;</a>');
 });
//скрипт для пагинатора для Press_review END

//скрипт для псевдоссылки в поле поиска по банковским терминам
$(document).ready(function(){
	$('.pseudoLink').bind('click', function(){
		var valPs = $(this).text();
		$('.inputWrapper input').val(valPs);
	});
});
//скрипт для псевдоссылки в поле поиска по банковским терминам Конец



//скрипт для комментариев banks_of_moscov
$(document).ready(function(){
	var $showP = $('.showP');
		
	$showP.each(function(){
		var $this = $(this),
			$thisHidP = $this.prev('.hiddenP');
			
		$this.on('click', function(){
			thisTextShowP = $this.text(); 

			$thisHidP.toggleClass('visibP');
			if(thisTextShowP == 'Читать далее') {
				$this.text('Свернуть');
			} else {
				$this.text('Читать далее');
			}
		});
	});
});
//скрипт для комментариев banks_of_moscov End

//скрипт для радиокнопки banks_of_russia
$(document).ready(function(){
	var $radioWrapp = $('.radioWrapp');
	
	$radioWrapp.each(function(){
		var $radio = $(this).find('input[type=radio]');
		var $span = $radio.parent('.showRadio');
		
		if ($radio.prop('checked')) {
			$span.addClass('checkedRadio');
		}
    
    $(this).mousemove(function(){
			var hasClass = $span.hasClass('checkedRadio');
			if (!hasClass) {
					$span.addClass('hoverRadio');
			}
		});
    
    $(this).mouseout(function(){		
			$span.removeClass('hoverRadio');
		});
    $radio.click(function(e){
      e.stopPropagation();
    });
    $(this).click(function(){
		$radio.click();
        $radioWrapp.find('.showRadio').removeClass('checkedRadio');
        $span.addClass('checkedRadio');
		});
	});	
});
//скрипт для радиокнопки banks_of_russia End

//скрипт для чекбоксов deposits
$(document).ready(function(){
	var $blockCheck = $('.blockCheck');

	$blockCheck.each(function(){
		var $checkbox = $(this).find('input[type=checkbox]'),
			$checkBoxWrap = $checkbox.parent('.checkBoxWrap');

		if ($checkbox.prop('checked')) {
			$checkBoxWrap.addClass('checkedRadio');
		}

		$(this).mousemove(function(){
			var hasClass = $checkBoxWrap.hasClass('checkedRadio');

			if (!hasClass) {
				$checkBoxWrap.addClass('hoverRadio');
			}
		}).mouseout(function(){
			$checkBoxWrap.removeClass('hoverRadio');
		});

		$checkbox.click(function(e){
  			e.stopPropagation();
		});

		$(this).click(function(){
			$checkBoxWrap.toggleClass('checkedRadio');
		});

	});
});
//скрипт для чекбоксов deposits End


//скрипт для select banks_of_russia
$(document).ready(function(){
	$('.selWrapp select').each(function(){
		var $this = $(this),
			numberOfOptions = $(this).children('option').length;
			$this.addClass('select-hidden'); 
			$this.wrap('<div class="select"></div>');
			$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');
	  
		$styledSelect.text($this.children('option').eq(0).text());
	  
		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);
	  
		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}
	  
		var $listItems = $list.children('li');
	  
		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.select-styled.active').each(function(){
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});
	  
		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
		});
	  
		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});

	});
});

//скрипт для пагинатора для banks_of_russia
$(document).ready(function(){
	$('.allBanksMain').pajinate({
		items_per_page : 14,
		item_container_id : '.allBanksWrap',
		nav_panel_id : '.alt_page_navigation',
		num_page_links_to_display : 4
	});
	$('.alt_page_navigation').append('<a href="#" class="up">Наверх &uarr;</a>');
});
//скрипт для пагинатора для banks_of_russia END





















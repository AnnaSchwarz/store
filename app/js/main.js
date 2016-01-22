$(document).ready(function(){
	//аккордион
	$('.filter__title').click(function(event){
		if($(this).hasClass('open'))
		{
			event.preventDefault();
			$(this).nextAll().slideUp('slow');
			$(this).removeClass('open').addClass('close');
		}
		else
		{
				event.preventDefault();
				$(this).nextAll().slideDown('slow');
				$(this).removeClass('close').addClass('open');
			}	
		});

	//сброс чекбоксов для брендов
	/*	$('.filter__reset').click(function(event){
			event.preventDefault();
			//$('.accordion__section-input:checked').prop('checked',false);
			//$('input:checkbox').prop('checked',false);
			$('input[name="brands"]').prop('checked',false);
		});
*/
	//сброс чекбоксов
		$('.filter__reset').click(function(event){
			event.preventDefault();
			$(this).parent().find('input[type="checkbox"]').prop('checked',false);
		});

	//переключение вида отображения
		$('.head-filter__view-url').click(function(event){
			event.preventDefault();
			var filter = $(this).data('filter');
			$('.head-filter__view-url').removeClass('active');
			$(this).addClass('active');
			$('.products-list').attr('class','products-list').addClass('filter-'+filter);
		});

	//выделение цвета

		$('.filter__colours-link').click(function(event){
			event.preventDefault();
			
			if($(this).hasClass('active')==true)
			{
				event.preventDefault();
				$(this).removeClass('active');
			}
			else
				{$(this).addClass('active');}
		});

	//делим на 2 колоночки

		var col = $('.attention__text');

		if(typeof col !=='undefined'){
			$(col).columnize({
				columns: 2,
				width:530
			});
		}

	
});

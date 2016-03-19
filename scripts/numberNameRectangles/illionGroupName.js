(function($)
{
	$(document).ready(function()
	{
		console.log("Running illionGroupName");
		var $groupNumberElement = $('script[src="scripts/numberNameRectangles/illionGroupName.js"]');
		$groupNumberElement.after('<input class="illion-group-number" onkeydown="if (event.keyCode === 13) $(\'.illion-group-number-button\').click();"/>' +
			'<button class="illion-group-number-button" type="button" onclick="illion_group_number_button_onclick()">Get Name</button>' +
			'<div style="word-break:break-all;" class="illion-group-name-result"><em>The group name will appear here</em></div>');
		
		var notLoaded = typeof io === 'undefined' || typeof io.harriknox === 'undefined' || typeof io.harriknox.NumberName === 'undefined';
		if (notLoaded)
		{
			$('.illion-group-name-result').html('<span style="color:red;font-weight:bold;">Error: Number-Name could not be loaded</span>');
		}
		
		illion_group_number_button_onclick = notLoaded ? function(){} : function()
		{
			var value = $('.illion-group-number').val();
			var result;
			if (value === "")
			{
				result = "<em>The group name will appear here</em>";
			}
			else
			{
				try
				{
					result = io.harriknox.NumberName.illion_group_name(value);
				}
				catch (e)
				{
					result = '<span style="color:red;font-weight:bold;">Error: ';
					if (typeof io === 'undefined' || typeof io.harriknox === 'undefined' || typeof io.harriknox.NumberName === 'undefined') result += 'Number-Name could not be loaded';
					else if (value.match(/[^\d\.\-]/)) result += 'Value contains non-numerals';
					else if (!value.match(/^-?\d+(\.\d+)?$/)) result += 'Value not in number format';
					else if (value.match(/^-/) || value.match(/^0+$/)) result += 'Value is not positive';
					else if (value.match(/\./)) result += 'Value is not an integer';
					else result += e.message;
					result += '</span>';
				}
			}
			$('.illion-group-name-result').html(result);
		};
	});
})(jQuery);
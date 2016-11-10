(function($){
    $.fn.linkedCheckboxes = function(){
        return this.each(function(){
            var $this = $(this);
            $this.on('change', function (e) {

                var $dependents = $this.find('[data-type="dependent"]'),
                    numberOfCheckedDependents = $('[data-type="dependent"]:checked').length,
                    $allCheckbox = $this.find('#all'),
                    allIsChecked = $allCheckbox.prop('checked'),
                    $changedInput = $this.find(e.target);

                if(allIsChecked) {
                    if($changedInput.attr('id') !== 'all') {
                        $allCheckbox.prop('checked', false);
                        return;
                    }
                    $dependents.prop('checked', false);
                }

                if(numberOfCheckedDependents === $dependents.length) {
                    $dependents.prop('checked', false);
                    $allCheckbox.prop('checked', true);
                }
            })
        });
    };
}(jQuery));
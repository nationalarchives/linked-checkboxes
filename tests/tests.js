QUnit.test("On page load 'all' should be checked", function (assert) {
    assert.ok($('#all').prop('checked') === true, "All is checked");
});

["#memoranda", "#conclusions", "#precedent-books", "#notebooks"].forEach(function (i) {
    QUnit.test("Checking any other checkbox should result in #all being unchecked", function (assert) {
        $('.linked-checkboxes').linkedCheckboxes();
        var input = $("#test-input").focus();
        $(i).click();
        assert.ok($('#all').prop('checked') === false, "All is UNchecked");
    })
});

QUnit.test("#all should be checked if no dependents are checked", function (assert) {
    $('.linked-checkboxes').linkedCheckboxes();
    assert.ok($('#all').prop('checked') === true, "All is checked");
});

QUnit.test("Checking all dependents should results in no dependents being checked", function (assert) {
    $('.linked-checkboxes').linkedCheckboxes();
    $dependents = $('[data-type="dependent"]');
    $dependents.click();
    assert.equal($('[data-type="dependent"]:checked').length, 0, "Checking all dependents results in none being checked")
} );


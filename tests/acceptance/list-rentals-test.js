import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /', async function(assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.listing').length, 'should display 3 listings');
  });

  test('should link to information about the company', async function (assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should link to contact information', async function (assert) {
    await visit('/');
    await click(".menu-contact");
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});

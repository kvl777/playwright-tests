import { test } from '@fixtures/fixtures';

test.describe('Examples', () => {
    test.skip('skip test v1', async () => {
        // This test will be skipped
    });

    test('skip test v2', async ({}, testInfo) => {
        test.skip(testInfo.project.name === 'chromium', 'This test will be skipped for chromium');
        // do something
    });

    // test.only('only run this test', { tag: '@008' }, async () => {});

    test('slow test', async () => {
        test.slow();
        // do something
    });
});

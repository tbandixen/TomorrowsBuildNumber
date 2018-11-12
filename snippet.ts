// Type declarations for Clipboard API
// https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API
interface Clipboard {
  writeText(newClipText: string): Promise<void>;
  // Add any other methods you need here.
}

interface NavigatorClipboard {
  // Only available in a secure context.
  readonly clipboard?: Clipboard;
}

interface Navigator extends NavigatorClipboard {}

javascript: ((versionsPrefix: string) => {
  const today = new Date();
  const newYearsDay = new Date(today.getFullYear(), 0, 1);
  const timeDiff = today.getTime() - newYearsDay.getTime();
  const dayOfYear = Math.ceil(timeDiff / 86400000);
  const tomorrowsDayOfYear = dayOfYear + 1;
  const shortYear = today
    .getFullYear()
    .toString()
    .substring(2);
  const buildNumber = versionsPrefix + shortYear + tomorrowsDayOfYear;

  navigator.clipboard.writeText(buildNumber.toString()).then(void 0, () => {
    alert('Unable to write to 📋. :-( Tomorrows build-number is: ' + buildNumber);
  });
})('2.2.');

// scripts/announce.js

import twitter from 'twitter';
import email from 'email';

function postToTwitter(newVersion) {
  const tweet = `New version ${newVersion} of SPF released! Check it out on GitHub: ${githubReleaseUrl} and download it from: ${downloadUrl}`;
  twitter.postTweet('@spfjs', tweet);
}

function sendEmailAnnouncement(newVersion) {
  const emailContent = `
    Hello SPF users,

    We are excited to announce the release of SPF ${newVersion}! This version includes several new features and bug fixes. You can find the detailed release notes on the GitHub release page: ${githubReleaseUrl}.

    To download the latest version of SPF, please visit our Download page: ${downloadUrl}.

    Thank you for your continued support!

    Best regards,
    SPF Team
  `;
  email.send('spfjs@googlegroups.com', 'SPF Announcement', emailContent);
}

function handleAnnouncement(newVersion) {
  postToTwitter(newVersion);
  sendEmailAnnouncement(newVersion);
}

export default handleAnnouncement;

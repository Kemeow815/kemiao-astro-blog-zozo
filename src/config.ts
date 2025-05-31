import type { PostHideElements } from '~/content/config';

export const Site = 'https://blog-v8.kemeow.top';
export const SiteLanguage = 'zh';
export const SiteTitle = '喵落阁';
export const SiteDescription = '愿你看清一切真相后，依旧热爱你的家人和朋友。';
export const FooterDescription = '奇迹只能一时，命运总是漫长。';
export const AdminName = '克喵爱吃卤面';
export const PageSize = 15;

// socialPlatform => userName
// check components/Header.astro socialConfig for more info
export const Socials: Record<string, Record<string, string>> = {
	mail: { url: 'mailto:me@kemiaosw.top' },
	github: { url: 'https://github.com/Kemeow815' },
	x: { url: 'https://x.com/kemiaosw' },
	// mastodon: { url: 'https://mastodon.social/@userName' },
	// facebook: { url: 'https://facebook.com/userName' },
	// instagram: { url: 'https://instagram.com/userName' },
	telegram: { url: 'https://t.me/KemiaoJun' },
	qq: { url: 'https://qm.qq.com/q/m8FW8Y6TkY'},
	// spotify: { url: 'https://open.spotify.com/user/3126z754j4qv7m4l6p4y4x7h7' },
	music: { url: 'https://music.163.com/#/playlist?id=13681647281' },
	// youtube: { url: 'https://youtube.com/@userName' },
	// skype: { url: 'https://skype.com/userName' },
	// slack: { url: 'https://slack.com/userName' },
	// messenger: { url: 'https://messenger.com/userName' },
	// whatsapp: { url: 'https://whatsapp.com/userName' },
	// snapchat: { url: 'https://snapchat.com/userName' },
	// line: { url: 'https://line.com/userName' },
	// twitch: { url: 'https://twitch.com/userName' },
	// weibo: { url: 'https://weibo.com/userName' },
	bilibili: { url: 'https://space.bilibili.com/3546643173477234' },
	// dingding: { url: 'https://dingtalk.com/userName' },
	// zhihu: { url: 'https://zhihu.com/userName' },
	// douban: { url: 'https://douban.com/userName' },
	rss: { url: '/rss.xml' },
};

// doc: https://giscus.app
// data-theme is auto changed between noborder_light / noborder_gray
export const GiscusConfig: Record<string, string> = {
	'data-repo': 'Kemeow815/kemiao-astro-blog-zozo',
	'data-repo-id': 'R_kgDOOyr4UA',
	'data-category': 'Announcements',
	'data-category-id': 'DIC_kwDOOyr4UM4CqzV1',
	'data-mapping': 'title',
	'data-strict': '0',
	'data-reactions-enabled': '1',
	'data-emit-metadata': '0',
	'data-input-position': 'top',
	'data-lang': 'zh-CN',
	'data-loading': 'lazy',
	crossorigin: 'anonymous',
	async: '',
};

export type HideElements =
	| PostHideElements
	| 'logo'
	| 'search'
	| 'themeToggler'
	| 'siteDescription'
	| 'footerDescription';
// Always hide elements from site
export const Hide: HideElements[] = [];

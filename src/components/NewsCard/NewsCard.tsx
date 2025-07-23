/**
 * 뉴스 카드 컴포넌트
 *
 * @author RWB
 * @since 2025.07.23 Wed 14:11:08
 */

import Card from '@modenews/components/Card';

export interface INewsLink
{
	/**
	 * 이름
	 */
	name: string;

	/**
	 * URL
	 */
	url: string;
}

export interface INewsCard
{
	/**
	 * 순서
	 *
	 * @default 0
	 */
	readonly idx?: number;

	/**
	 * 카테고리
	 */
	readonly category?: string;

	/**
	 * 타이틀
	 */
	readonly title: string;

	/**
	 * 내용
	 */
	readonly body: string;

	/**
	 * 링크 목록
	 */
	readonly links: INewsLink[];
}

/**
 * 뉴스 카드 컴포넌트 반환 메서드
 *
 * @param {INewsCard} param0: INewsCard
 *
 * @returns {React.JSX.Element} JSX
 */
export default function NewsCard({ idx = 0, category, title, body, links }: INewsCard): React.JSX.Element
{
	return (
		<Card
			className="animate-appear flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 opacity-0 shadow backdrop-blur"
			style={{ animationDelay: `${150 * idx}ms` }}
		>
			{category !== undefined && (
				<div>
					<span className="rounded-4xl bg-black/60 px-2 py-1 text-sm text-white">블로그</span>
				</div>
			)}

			<div>
				<h2 className="inline bg-linear-to-b from-transparent from-60% to-amber-300/50 to-60% bg-[length:100%_1.2em] bg-no-repeat pb-1 text-xl font-bold text-black/60">{title}</h2>
			</div>


			<div className="min-h-50 text-white">{body}</div>

			<hr className="border-white/20" />

			<div className="flex flex-col gap-2">
				{links.map(({ name, url }) => (
					<div className="flex flex-col text-sm" key={url}>
						<div>
							<div className="inline rounded bg-black/60 px-1 py-0.5 text-white">{name}</div>
						</div>

						<a className="break-all text-white underline" href={url} rel="noreferrer" target="_blank">{url}</a>
					</div>
				))}
			</div>
		</Card>
	);
}
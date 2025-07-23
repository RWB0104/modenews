/**
 * 인덱스 페이지 컴포넌트
 *
 * @author RWB
 * @since 2025.07.23 Wed 17:35:06
 */

import Card from '@modenews/components/Card';
import NewsCard from '@modenews/components/NewsCard';

import type { INewsCard } from '@modenews/components/NewsCard';

const mocks: INewsCard[] = [
	{
		body: '생성형 AI는 빠르게 발전하는 기술로, 올바른 정보 습득을 위해 신뢰할 수 있는 출처와 전문가를 꾸준히 팔로우하는 것이 중요하며, 다양한 채널을 통해 균형 잡힌 정보를 얻는 것이 필수적입니다.',
		category: '블로그',
		links: [
			{
				name: '토론',
				url: 'https://example.com'
			},
			{
				name: '원문',
				url: 'https://example.com'
			}
		],
		title: 'AI 발전을 따라잡는 나만의 방법 (그리고 당신도 꼭 해야하는 이유)'
	},
	{
		body: '생성형 AI는 빠르게 발전하는 기술로, 올바른 정보 습득을 위해 신뢰할 수 있는 출처와 전문가를 꾸준히 팔로우하는 것이 중요하며, 다양한 채널을 통해 균형 잡힌 정보를 얻는 것이 필수적입니다.',
		category: '블로그',
		links: [
			{
				name: '토론',
				url: 'https://example.com'
			},
			{
				name: '원문',
				url: 'https://example.com'
			}
		],
		title: 'AI 발전을 따라잡는 나만의 방법 (그리고 당신도 꼭 해야하는 이유)'
	},
	{
		body: '생성형 AI는 빠르게 발전하는 기술로, 올바른 정보 습득을 위해 신뢰할 수 있는 출처와 전문가를 꾸준히 팔로우하는 것이 중요하며, 다양한 채널을 통해 균형 잡힌 정보를 얻는 것이 필수적입니다.',
		category: '블로그',
		links: [
			{
				name: '토론',
				url: 'https://example.com'
			},
			{
				name: '원문',
				url: 'https://example.com'
			}
		],
		title: 'AI 발전을 따라잡는 나만의 방법 (그리고 당신도 꼭 해야하는 이유)'
	},
	{
		body: '생성형 AI는 빠르게 발전하는 기술로, 올바른 정보 습득을 위해 신뢰할 수 있는 출처와 전문가를 꾸준히 팔로우하는 것이 중요하며, 다양한 채널을 통해 균형 잡힌 정보를 얻는 것이 필수적입니다.',
		category: '블로그',
		links: [
			{
				name: '토론',
				url: 'https://example.com'
			},
			{
				name: '원문',
				url: 'https://example.com'
			}
		],
		title: 'AI 발전을 따라잡는 나만의 방법 (그리고 당신도 꼭 해야하는 이유)'
	},
	{
		body: '생성형 AI는 빠르게 발전하는 기술로, 올바른 정보 습득을 위해 신뢰할 수 있는 출처와 전문가를 꾸준히 팔로우하는 것이 중요하며, 다양한 채널을 통해 균형 잡힌 정보를 얻는 것이 필수적입니다.',
		category: '블로그',
		links: [
			{
				name: '토론',
				url: 'https://example.com'
			},
			{
				name: '원문',
				url: 'https://example.com'
			}
		],
		title: 'AI 발전을 따라잡는 나만의 방법 (그리고 당신도 꼭 해야하는 이유)'
	},
	{
		body: '생성형 AI는 빠르게 발전하는 기술로, 올바른 정보 습득을 위해 신뢰할 수 있는 출처와 전문가를 꾸준히 팔로우하는 것이 중요하며, 다양한 채널을 통해 균형 잡힌 정보를 얻는 것이 필수적입니다.',
		category: '블로그',
		links: [
			{
				name: '토론',
				url: 'https://example.com'
			},
			{
				name: '원문',
				url: 'https://example.com'
			}
		],
		title: 'AI 발전을 따라잡는 나만의 방법 (그리고 당신도 꼭 해야하는 이유)'
	}
];

/**
 * 인덱스 페이지 컴포넌트 반환 메서드
 *
 * @returns {React.JSX.Element} JSX
 */
export default function IndexPage(): React.JSX.Element
{
	return (
		<main className="min-h-[100dvh] w-full bg-linear-to-b from-[#ff5f6d] to-[#ffc370] p-5">
			<div className="absolute top-4 right-4">
				<img src="https://placehold.co/64" />
			</div>

			<div className="flex flex-col items-center justify-center gap-1 text-white">
				<p className="text-xl">모여봐요 개발자와 AI의 숲</p>

				<div className="relative">
					<h1 className="relative z-1 text-6xl font-bold">모드뉴스</h1>
					<div className="absolute bottom-0 left-0 h-1/3 w-full bg-amber-300 opacity-50" />
				</div>

				<img src="https://placehold.co/100" />
			</div>

			<div className="max-w-5xl justify-self-center">
				<section className="mt-20 grid grid-cols-2 gap-6 gap-y-12">
					{mocks.map((mock) => (
						<NewsCard
							body={mock.body}
							category={mock.category}
							key={mock.title}
							links={mock.links}
							title={mock.title}
						/>
					))}
				</section>

				<Card className="my-20 text-black/60">
					<h2 className="text-4xl font-bold">GeekNews 요약</h2>

					<p>yyyy년 MM월 dd일</p>

					<h3 className="font-bold">오늘의 주요 뉴스</h3>

					<ul>
						{mocks.map(({ title }, idx) => (
							<li className="flex items-center gap-1 not-last:mb-1" key={title}>
								<div className="flex size-5 items-center justify-center rounded-full bg-black/60 p-1 text-sm font-bold text-white">
									{idx}
								</div>

								<p>{title}</p>
							</li>
						))}
					</ul>
				</Card>
			</div>
		</main>
	);
}
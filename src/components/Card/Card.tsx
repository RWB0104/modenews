/**
 * 카드 컴포넌트
 *
 * @author RWB
 * @since 2025.07.23 Wed 16:45:06
 */

import { cn } from '@modenews/utils/common';

import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export type ICard = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

/**
 * 카드 컴포넌트 반환 메서드
 *
 * @param {ICard} param0: ICard
 *
 * @returns {React.JSX.Element} JSX
 */
export default function Card({ className, ...props }: ICard): React.JSX.Element
{
	return (
		<article className={cn('flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 shadow backdrop-blur', className)} {...props} />
	);
}
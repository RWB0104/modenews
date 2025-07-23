/**
 * 공통 메서드
 *
 * @author RWB
 * @since 2025.07.23 Wed 16:43:29
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 클래스 결합 메서드
 *
 * @param {ClassValue[]} inputs: 클래스 배열
 *
 * @returns {string} 클래스
 */
export function cn(...inputs: ClassValue[]): string
{
	return twMerge(clsx(inputs));
}
export interface TechStack {
	name: string;
	icon: string;
}

export interface UseCaseData {
	website: string;
	color: string;
	gradientFrom: string;
	gradientTo: string;
	icon: string;
	isAvailable: boolean;
	techStack: TechStack[];
}

// solution cannot include; 5, 6, 7, 8, 9, +, -
enum Gift {
	Coal,
	Train,
	Bicycle,
	Traditional,
	SuccessorToTheNintendoSwitch,
	TikTokPremium = (1 << 3), // 비트연산을 활용해 해결
	Vape = (1 << 4),
	OnTheMove = (1 << 4) | (1 << 3) | (1 << 1),
	OnTheCouch = (1 << 4) | (1 << 3) | (1 << 2),
};

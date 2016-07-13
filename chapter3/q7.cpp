#include <iostream>

using namespace std;
void combination(int hour, int minute);

int main()
{
	int hourValue;
	int minuteValue;
	cout << "시간 값을 입력하세요 : ";
	cin >> hourValue;
	cout << "분 값을 입력하세요 : ";
	cin >> minuteValue;

	combination(hourValue, minuteValue);
	return 0;
};

void combination(int hour, int minute)
{
	cout << hour << ":" << minute << endl;
};

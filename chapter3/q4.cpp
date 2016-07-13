#include <iostream>

using namespace std;
int getLunarAge(int age);

int main()
{
	int age;
	cout << "Enter your age : ";
	cin >> age;

	cout << getLunarAge(age) << endl;
	return 0;
};

int getLunarAge(int age)
{
	return 12 * age;
};

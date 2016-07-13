#include <iostream>

using namespace std;
double convertCelciusToFarhenheit(double celciusDegree);

int main()
{
	double celciusDegree;
	cout << "섭씨 온도를 입력하고 Enter를 누르세요 : ";
	cin >> celciusDegree;

	cout << convertCelciusToFarhenheit(celciusDegree) << endl;
	return 0;
};

double convertCelciusToFarhenheit(double celciusDegree)
{
	return (1.8 * celciusDegree) + 32;
};

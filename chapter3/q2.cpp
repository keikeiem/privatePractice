#include <iostream>

using namespace std;
double mileTokilometer(double distance);

int main()
{
	double distance;
	cout << "거리(단위 mile(s))?";
	cin >> distance;

	cout << distance << "mile(s) = " << mileTokilometer(distance) << "kilo meter(s)" << endl;
	return 0;
};

double mileTokilometer(double distance)
{
	return 1.60934 * distance;
};

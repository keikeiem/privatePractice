#include <iostream>

using namespace std;
string getFirstSentence();
string getSecondSentence();

int main()
{
	cout << getFirstSentence() << endl;
	cout << getFirstSentence() << endl;
	cout << getSecondSentence() << endl;
	cout << getSecondSentence() << endl;
	return 0;
};

string getFirstSentence()
{
	return "Three blind mice";
};

string getSecondSentence()
{
	return "See how they run";
};

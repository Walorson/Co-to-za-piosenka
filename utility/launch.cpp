#include <iostream>
#include <fstream>
#include <experimental/filesystem>

namespace fs = std::experimental::filesystem;

void importCustomSongs();

int main()
{
    importCustomSongs();
    
    system("start index.html");

    return 0;
}

void importCustomSongs()
{
    fs::path folderPath = fs::current_path();
    folderPath += "./customPack";
    fs::path configPath = "./customPack/!config.js";

    std::cout << "IMPORTOWANIE NIESTANDARDOWYCH QUIZOW" << std::endl << std::endl;

    std::ofstream configFile(configPath);

    if (!configFile.is_open())
    {
        std::cerr << "Wystapil nieoczekiwany blad. Nie udalo sie otworzyc pliku config.js.";
        system("pause");
        return;
    }

    configFile << "//Wpisz nazwe dodanej przed chwila piosenki do tablicy ponizej | Przyklad poprawnej skladni tablicy: [\"Example\",\"Another Example\",\"Super Example!\"]; (Albo po prostu uzyj gotowego programu ImportCustomSongs)\n";
    configFile << "const customPackList = [";

    for (const auto& entry : fs::directory_iterator(folderPath))
    {
        if (fs::is_directory(entry.status()))
        {
            std::string folderName = entry.path().filename().string();
            std::cout << "IMPORT: " << folderName << std::endl;

            configFile << '"' << folderName << '"' << ", ";
        }
    }

    configFile << "];";
    configFile.close();

    std::cout << std::endl << "Wszystkie niestandardowe quizy zostaly zimportowane pomyslnie :)" << std::endl;
    std::cout << "================================================================" << std::endl;
    std::cout << "Nacisnij 'Enter', aby uruchomic gre \"Co to za Piosenka?\" ..." << std::endl;
    std::cin.get();
}
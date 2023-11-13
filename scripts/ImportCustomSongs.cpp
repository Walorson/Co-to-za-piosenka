#include <iostream>
#include <fstream>
#include <experimental/filesystem>

namespace fs = std::experimental::filesystem;

int main()
{
    fs::path folderPath = fs::current_path();
    fs::path configPath = "./!config.js";

    std::ofstream configFile(configPath);

    if (!configFile.is_open())
    {
        std::cerr << "Wystapil nieoczekiwany blad. Nie udalo sie otworzyc pliku config.js.";
        return 1;
    }
 
    configFile << "//Wpisz nazwe dodanej przed chwila piosenki do tablicy ponizej | Przyklad poprawnej skladni tablicy: [\"Example\",\"Another Example\",\"Super Example!\"]; (Albo po prostu uzyj gotowego programu ImportCustomSongs)\n";
    configFile << "const customSongsList = [";

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
        system("pause");
        return 0;
}
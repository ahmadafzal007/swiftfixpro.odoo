# Navigate to the directory containing the Rhubarb executable
cd "C:\Users\Ahmad Afzal\Desktop\oddo\Rhubarb-Lip-Sync-1.13.0-Windows"

# Define the path to the folder containing the audio files
$audioFolder = "C:\Users\Ahmad Afzal\Desktop\oddo\public\audios"

# Get all .wav files in the audio folder
$wavFiles = Get-ChildItem -Path $audioFolder -Filter *.wav

# Loop through each .wav file and generate a corresponding .json file
foreach ($wavFile in $wavFiles) {
    # Construct the output file name by replacing the extension with .json
    $jsonFile = [System.IO.Path]::ChangeExtension($wavFile.FullName, ".json")
    
    # Run the Rhubarb command
    ./rhubarb.exe -f json $wavFile.FullName -o $jsonFile
}

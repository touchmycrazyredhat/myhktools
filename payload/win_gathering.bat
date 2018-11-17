set
echo %cd%
echo %COMSPEC%

fsutil fsinfo drives
wmic bios list full
gpresult /z
whoami /all
systeminfo
type %WINDIR%\System32\drivers\etc\hosts
# Disk Information
wmic logicaldisk where drivetype=3 get name, freespace, systemname, filesystem, size, volumeserialnumber
# Patch IDs
wmic qfe get hotfixid
# Process Informatio
wmic process get caption,executablepath,commandline
wmic service [list full]
wmic share [list full]
wmic startup [list full]
wmic useraccount [list full]

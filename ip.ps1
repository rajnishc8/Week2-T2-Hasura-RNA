
# Script to return current IPv4 addresses for Linux, MacOS, or Windows
$IP = if ($IsLinux -or $IsOSX) {
    $ipInfo = ifconfig | Select-String 'inet'
    $ipInfo = [regex]::matches($ipInfo,"addr:\b(?:\d{1,3}\.){3}\d{1,3}\b") | ForEach-Object value
    foreach ($ip in $ipInfo) {
        $ip.Replace('addr:','')
    }
}
else {
    Get-NetIPAddress | Where-Object {$_.AddressFamily -eq 'IPv4'} | ForEach-Object IPAddress
}

# Remove loopback address from output regardless of platform
$IP | Where-Object {$_ -ne '127.0.0.1'}

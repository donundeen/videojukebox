# installing raspbian OS LITE BUSTER (Legacy) on RPI 4

after writign image:
- edit config.txt, adding     dtoverlay=dwc2 at the end, under [all]
- edit the file called `cmdline.txt`. Look for `rootwait`, and add `modules-load=dwc2,g_ether` immediately after. (with a space after rootwait and after g_ether)

# initial setup
`sudo apt-get update`
`sudo apt-get upgrade`

# OMX Player
https://www.raspberrypi-spy.co.uk/2013/06/playing-videos-on-the-raspberry-pi-command-line/

`sudo apt-get install omxplayer`

# getting free videos to test with
https://www.pexels.com/search/videos/cats/


# copying to pi:
`scp video.mp4 pi@10.0.0.155:~/.`

# video playing works!

# install nodejs and npm
`sudo apt-get install nodejs`
`sudo apt-get install npm`

# 

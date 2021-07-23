---
layout: page
title: Controlly
permalink: /controlly/
---

Use a game controller as a rich-featured remote control for Mac.

<img
src="{{ site.baseurl }}/images/apps/controlly.png"
alt="Controlly icon"
height="128"
style="padding: 0px">

## [Download for Mac][DownloadLinkMac]

[DownloadLinkMac]: https://apps.apple.com/app/controlly/id1548544614

Requires macOS 11 (Big Sur) or later.

<a id="support"></a>

<br/>

## Support

#### How to connect a game controller to Mac

If the controller was not previously connected to Mac, you will need to put your controller into pairing mode. Then, you will be able to select it on System Preferences > Bluetooth.

Instructions for puting a controller into pairing mode vary for each model, but they can be easily found online. Here are a few helpful links for [PlayStation], [Xbox] and [Apple Support].

<!-- - For a PlayStation controller, press the PS button and Share button at the same time for a few seconds until the controller lights start flashing.

- For Bluetooth enabled Xbox controllers, press and hold the Pair button for a few seconds. -->

[PlayStation]: https://www.playstation.com/en-us/support/hardware/ps4-pair-dualshock-4-wireless-with-pc-or-mac/
[Xbox]: https://support.xbox.com/en-US/help/hardware-network/accessories/connect-and-troubleshoot-xbox-one-bluetooth-issues
[Apple Support]: https://support.apple.com/en-us/HT210414


#### Controller is connected, but Mac is not responding

You probbably did not enable accessibility features for Controlly. Go to System Preferences > Security & Privacy > Accessibility, then click on the locker on the bottom left of the window and enable Controlly's checkbox.

<!-- #### Mac shows an error when trying to open the .dmg installer

Right-click on the file, then click "open". If it still gives an error, try other options from [Apple Community] and [Apple Support].

[Apple Community]: https://discussions.apple.com/thread/250425993
[Apple Support]: https://support.apple.com/en-us/HT202491 -->

#### Some actions are not working
Controlly currently triggers Mission Control, App Exposé, and Swipe between desktops on the Mac by simulating the default shortcut for those actions. You may have set custom shortcuts for some of those actions, so Controlly cannot trigger them anymore. It is possible to restore the default shortcuts on System Preferences > Keyboard > Shortcuts > Mission Control. Here is a screenshot for reference.

![Restore default shortcuts]({{ site.baseurl }}/images/auxiliary/default-shortcuts.png)

I understand that this is not an ideal solution, but to truly solve this problem, the app would have to read a private system file that stores users shortcuts. This approach would raise some privacy concerns and I don't feel comfortable doing that.

#### How to make Controlly launch on Mac startup

Go to System Preferences > Users & Groups > Login Items, then click on "+" and select Controlly.

<br/>

## Privacy Policy

Controlly takes your privacy very seriously and it does not gather any personally identifiable information. All proccessing is done on-device and no data is transmited anywhere.

If Controlly, or substantially all of its assets were acquired, or if the app goes out of business or enters bankruptcy, this policy and its effects may change or be amended.

Altough changes are likely to be minor, Controlly reserves the right to change its privacy policy from time to time in Controlly's sole discretion. Your continued use of the app after any change in this privacy policy will constitute your acceptance of such change. By using Controlly, you consent to this privacy policy.

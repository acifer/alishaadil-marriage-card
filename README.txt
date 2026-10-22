Alisha & Aadil — alishaadil.com (GitHub Pages, custom domain via CNAME)

The front page and the three invitations open without a word. Only the admin page is locked.

  /                 Front page for everyone (next celebration, countdown, RSVP, the way into the wedding invitation)
  /#alisha          Front page, Alisha's side (starts with her Haldi; opens Alisha's invitation)
  /#aadil           Front page, Aadil's side (starts with his Haldi & Mehndi; opens Aadil's invitation)
                    The side is remembered on the guest's phone; old links with #k=<word> still pick the right side.
  /wedding/         Common invitation: Guide, Nikah, Reception, Rukhsati
  /alisha/          Alisha's guests: + Alisha's Haldi (ladies only)
  /aadil/           Aadil's guests: + Aadil's Haldi & Mehndi
  /admin/           For the two of you: links to send, settings, health report     word: dulha-dulhan (TEMPORARY)
  /stream-test/     Temporary YouTube live test copy (still sealed; delete after testing)

Mock any moment: add ?at=2026-11-28T16:10 to the front page address (Patna time).
RSVP: replies are emailed to we@alishaadil.com through Web3Forms (form key RSVP_KEY at build time; public by design).
Clear one phone: add ?fresh to the front page address (alishaadil.com/?fresh) to forget everything the site stored there.
Built with r1/build/mk_r4.sh: round-2 sources + first-screen fixes + round 4 (larger text, RSVP field errors, sideways layout,
sound button, stream line, swipe tip, tap the peeking card, touchpad swipe). Tested before going live; see the commit message.

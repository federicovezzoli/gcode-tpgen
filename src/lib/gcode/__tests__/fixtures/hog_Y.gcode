; mode: hog
; rapid feedrate: 2000 mm/min
; raise/lower feedrate: 800 mm/min
; z height of cut: -0.5
; clearance z height: 0.5
; cutting feedrate: 1000 mm/min
; slotting feedrate: 200 mm/min
; stepover: 12 mm
; orientation: Y
; feedrate 1000 mm/min, stepover 12.000 mm, volumetric 6000 mm3 per sec
; top hat with stock to leave
G0 Z0.5 F800
G0 X0.200 Y60.000 F2000
G1 Z-0.5 F800
G1 X0.200 Y45.000 F200
G1 X12.200 Y45.000 F200
G1 X12.200 Y15.000 F200
G1 X0.200 Y15.000 F200
G1 X0.200 Y0.000 F200
G0 Z0.5 F800
; top hat finishing
G0 Z0.5 F800
G0 X0.000 Y60.000 F2000
G1 Z-0.5 F800
G1 X0.000 Y45.000 F200
G1 X12.000 Y45.000 F200
G1 X12.000 Y15.000 F200
G1 X0.000 Y15.000 F200
G1 X0.000 Y0.000 F200
G0 Z0.5 F800
; full speed cut
G0 Z0.5 F800
G0 X0.000 Y60.000 F2000
G1 Z-0.5 F800
G1 X0.000 Y0.000 F1000
G0 Z0.5 F800

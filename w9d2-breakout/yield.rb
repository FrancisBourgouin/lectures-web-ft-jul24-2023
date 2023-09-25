def fancy_print
  pp "*********-*********"
  pp yield
  pp "*********-*********"
end

fancy_print {5.times do p "wiggle" end}


  
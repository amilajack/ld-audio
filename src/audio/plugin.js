/*
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

import AudioButton from './AudioButton'
import AudioBlock from './AudioBlock'
import AudioModal from './AudioModal'

export default {
  type: 'audio',
  editable: false,
  button: AudioButton,
  block: AudioBlock,
  modal: AudioModal
}

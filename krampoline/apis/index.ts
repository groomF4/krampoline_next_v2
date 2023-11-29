import { PromptImage } from '@/types'
import axios from 'axios'

const baseUrl = ''

export const getImages = async (prompt: string) => {
  const res = await axios.get<PromptImage>(`${baseUrl}/prompt?${prompt}`)
  return res.data
}

const APIs = {
  getImages
}

export default APIs

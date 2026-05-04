import type { TaskKey } from '@/lib/site-config'
import { SbmDetailPage } from '@/components/sbm/sbm-detail-page'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

export async function TaskDetailPageOverride({ task, slug }: { task: TaskKey; slug: string }) {
  if (task === 'sbm') {
    return <SbmDetailPage task={task} slug={slug} />
  }
  return null
}

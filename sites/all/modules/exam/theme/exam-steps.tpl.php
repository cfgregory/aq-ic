<?php if ($content['#escape']): ?>
   <div class="exam-escape">
    <?php print l(t('Escape exam'), 'exam/escape', array('attributes' => array('class' => 'button'))) ?>
   </div>
<?php endif ?>
<ol>
  <?php $i = 0; $s = count($content['#steps']); foreach ($content['#steps'] as $step_id => $step): $i++ ?>
    <li class="<?php if ($i == 1) print 'first'; if ($i == $s) print ' last'; if ($step_id == $content['#step']) print ' active' ?>">
      <?php if ($content['#navigation']): ?>
        <?php print l($step->title, 'node/' . $step->nid); ?>
      <?php else: ?>
        <?php if (arg(1) == $step->nid): ?><b><?php endif ?>
        <?php print $step->title ?>
          <?php if (arg(1) == $step->nid): ?></b><?php endif ?>
      <?php endif ?>
    </li>
  <?php endforeach ?>
</ol>

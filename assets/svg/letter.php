<?php
$l = $_GET['letter'];
?>
<svg viewbox="0 0 40 40"><g class="<?php echo $l ?>">
<?php if($l == 'bg'): ?>
    <path class="square" d="M39,40L39,1L1,1L1,39L39,39" />
<?php else: ?>
    <?php if($l != 'x'): ?>
    <path class="square" d="M39,40L39,1L1,1L1,39L39,39" />
    <path class="square" d="M39,40L39,1L1,1L1,39L39,39" />
    <path class="h" d="M0,20L40,20" />
    <path class="h" d="M0,20L40,20" />
    <?php endif; ?>
    <path class="ltr" d="M0,0L40,40" />
    <path class="ltr" d="M0,0L40,40" />
    <path class="rtl" d="M40,0L0,40" />
    <path class="rtl" d="M40,0L0,40" />
<?php endif; ?>
</g></svg>
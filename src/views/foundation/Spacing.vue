<template>
  <div class="animated fadeIn">
    <div class="card">
      <div class="card-header">
        Spacing
      </div>
      <div class="card-body">
        <p>4pt</p>
        <p>8pt</p>
        <p>16pt</p>
        <p>24pt</p>
        <p>36pt</p>
        <p>48pt</p>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        Grid System (12 Columns)
      </div>
      <div class="card-body">
        <!-- 1 Column - Stack the columns on mobile by making one full-width and the other half-width -->
        <div class="row">
          <div class="col-12 col-md-12" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">1</div>
        </div>
        <br />
        <!-- 2 Columns - Columns are always 50% wide, on mobile and desktop -->
        <div class="row">
          <div class="col-6" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">1</div>
          <div class="col-6" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">2</div>
        </div>
        <br />
        <!-- 3 columns -->
        <div class="row">
          <div class="col-6 col-md-4" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">1</div>
          <div class="col-6 col-md-4" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">2</div>
          <div class="col-6 col-md-4" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">3</div>
        </div>
        <br />
        <!-- 4 Columns -->
        <div class="row">
          <div class="col-6 col-md-3" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px ; text-align: center;">1</div>
          <div class="col-6 col-md-3" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px ; text-align: center;">2</div>
          <div class="col-6 col-md-3" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px ; text-align: center;">3</div>
          <div class="col-6 col-md-3" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px ; text-align: center;">4</div>
        </div>
        <br />

        <!-- 6 Columns -->
        <div class="row">
          <div class="col-6 col-md-2" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">1</div>
          <div class="col-6 col-md-2" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">2</div>
          <div class="col-6 col-md-2" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">3</div>
          <div class="col-6 col-md-2" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">4</div>
          <div class="col-6 col-md-2" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">5</div>
          <div class="col-6 col-md-2" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">6</div>
        </div>
        <br />
        <!-- 12 Columns -->
        <div class="row">
          <div class="col-6 col-md-1" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">1</div>
          <div class="col-6 col-md-1" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">2</div>
          <div class="col-6 col-md-1" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">3</div>
          <div class="col-6 col-md-1" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">4</div>
          <div class="col-6 col-md-1" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">5</div>
          <div class="col-6 col-md-1" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">6</div>
          <div class="col-6 col-md-1" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">7</div>
          <div class="col-6 col-md-1" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">8</div>
          <div class="col-6 col-md-1" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">9</div>
          <div class="col-6 col-md-1" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">10</div>
          <div class="col-6 col-md-1" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">11</div>
          <div class="col-6 col-md-1" style="background-color: rgba(86,61,124,.15); border: 1px solid rgba(86,61,124,.2); padding: 12px; text-align: center;">12</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'typography'
}
</script>

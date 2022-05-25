<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarnavalVolontairesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carnaval_volontaires', function (Blueprint $table) {
            $table->unsignedBigInteger('IdVolontaire');
            $table->foreign('IdVolontaire')->references('IdVolontaire')
            ->on('volontaires');
            $table->unsignedBigInteger('IdCarnaval');
            $table->foreign('IdCarnaval')->references('IdCarnaval')->on('carnavales');
            $table->primary(['IdVolontaire','IdCarnaval']);
        });
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carnaval_volontaires');
    }
}
